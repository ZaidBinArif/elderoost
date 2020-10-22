const express = require('express');
const puppeteer = require('puppeteer');

const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const Residence = require('../models/residence');
const NewsArticle = require('../models/news_article');
const Review = require('../models/review');

const router = express.Router();

/* GET ALL residences listings. */
router.get('/', async (req, res, next) => {
  try {
    const currentPage =
      req.query.page && Number(req.query.page) > 0 ? Number(req.query.page) : 0;
    const offset = currentPage * 25;
    const prevPage = currentPage - 1 >= 0 ? currentPage - 1 : 0;
    const nextPage = currentPage + 1;

    const residences = await Residence.findAndCountAll({
      offset: offset,
      limit: 25
    });

    const { count, rows } = residences;
    const totalPages = count / 25;

    const page = {
      prevPage,
      currentPage,
      nextPage,
      totalPages
    };

    res.render('residences/index', {
      title: `Residences - Elderoost`,
      residences: rows,
      page: page
    });
  } catch (_error) {
    console.error(`Error`, _error);
    res.redirect('/');
  }
});

router.get('/suggest-new', csrfProtection, (req, res, next) => {
  if (req.user) {
    res.render(`residences/suggest-new-residence`, {
      title: `Suggest new residence - Elderoost`,
      csrfToken: req.csrfToken()
    });
  } else {
    res.redirect('/users/signin?ref=new-suggestion');
  }
});

router.post('/suggest-new', csrfProtection, async (req, res, next) => {
  if (req.user) {
    const {
      name,
      address,
      address_num,
      address_street,
      address_city,
      address_state,
      postal_code,
      address_country
    } = req.body;

    const slug =
      name
        .replace(/(\.)|(\’)|(\')/g, '')
        .toLowerCase()
        .replace(/ /g, '-') +
      `-` +
      address_state.toLowerCase().replace(/ /g, '-') +
      `-reviews`;

    const address_city_slug =
      address_city.toLowerCase().replace(/ /g, '-') +
      `-` +
      address_country.toLowerCase().replace(/ /g, '-');

    const address_state_slug =
      address_state.toLowerCase().replace(/ /g, '-') +
      `-` +
      address_country.toLowerCase().replace(/ /g, '-');

    const residence = await Residence.create({
      name: name,
      address: address,
      address_num: address_num,
      address_street: address_street,
      address_city: address_city,
      address_state: address_state,
      postal_code: postal_code,
      address_country: address_country,
      status: 'pending',
      slug: slug,
      address_city_slug: address_city_slug,
      address_state_slug: address_state_slug
    });

    if (residence) {
      res.render(`residences/suggest-new-residence-after`);
    }
  } else {
    res.redirect('/users/signin?ref=new-suggestion');
  }
});

/* API /// GET ALL residences listings using geoJSON. */
router.get('/api/', async (req, res, next) => {
  try {
    const residences = await Residence.findAll();

    if (residences) {
      const mapped = residences.map(residence => {
        return {
          type: 'Feature',
          properties: {
            name: residence.name,
            address: residence.address,
            slug: residence.slug
          },
          geometry: {
            type: 'Point',
            coordinates: [
              Number(residence.longitude),
              Number(residence.latitude)
            ]
          }
        };
      });

      const result = {
        type: 'FeatureCollection',
        features: mapped
      };
      res.send(JSON.stringify(result));
    }
  } catch (_error) {
    console.error(`error in /api/ : ${_error}`);
    res.sendStatus(200);
  }
});

// DEBUGGING
// router.get('/api/string', async (req, res, next) => {
//   const residences = await Residence.findAll({ limit: 100 });

//   if (residences) {
//     var str = '';

//     for (var residence of residences) {
//       str =
//         str +
//         `await Residence.create({name: "${residence.name}", address: "${residence.address}", latitude: "${residence.latitude}", longitude: "${residence.longitude}", address_num: "${residence.address_num}", address_street: "${residence.address_street}", address_city: "${residence.address_city}", address_state: "${residence.address_state}", postal_code: "${residence.postal_code}", address_country: "${residence.address_country}", status: "pending", slug: "${residence.slug}", address_city_slug: "${residence.address_city_slug}", address_state_slug: "${residence.address_state_slug}"});\n`;
//     }

//     res.send(str);
//   }
// });

router.get('/by-province/:province', async (req, res, next) => {
  try {
    const { province } = req.params;

    const residences = await Residence.findAll({
      where: {
        address_state_slug: `${province}`
      }
    });

    res.render('residences/by-province', {
      title: `Elderly Care Residences in ${residences[0].address_city}, Canada by Elderoost`,
      province: residences[0].address_state,
      residences: residences
    });
  } catch (_error) {
    console.error(`ERROR in /by-province/:province : ${_error}`);
    res.redirect('/residences');
  }
});

router.get('/by-city/:city', async (req, res, next) => {
  try {
    const { city } = req.params;

    const residences = await Residence.findAll({
      where: {
        address_city_slug: `${city}`
      }
    });

    res.render('residences/by-city', {
      title: `Elderly Care Residences in ${residences[0].address_city}, Canada by Elderoost`,
      city: residences[0].address_city,
      residences: residences
    });
  } catch (_error) {
    console.error();
    res.redirect('/residences');
  }
});

router.get('/:slug/image', async (req, res, next) => {
  try {
    const { slug } = req.params;
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(`https://elderoostalpha.herokuapp.com/residences/${slug}`);
    const screenshot = await page.screenshot({
      type: 'png',
      encoding: 'binary'
    });
    await browser.close();

    res.header('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (e) {
    console.error(`ERROR in /residences/:slug/image : ${e}`);
  }
});

router.get('/:slug', csrfProtection, async (req, res, next) => {
  const { slug } = req.params;

  try {
    const residence = await Residence.findOne({
      where: { slug: `${slug}` }
    });

    if (residence) {
      const newsArticles = await NewsArticle.findAll({
        where: [{ residence_id: residence.id }, { status: `confirmed` }]
      });

      const reviews = await Review.findAll({
        where: [{ residence_id: residence.id }, { status: `confirmed` }]
      });

      let complaint_message = ``;

      if (residence.address_state === `Quebec`) {
        complaint_message = `Do you have a complaint about a long term care home? If this is a long term care home, in the province of Quebec, then you can <a href="https://www.mfa.gouv.qc.ca/en/aines/lutte_contre_maltraitance/Pages/index.aspx" rel="nofollow" target="_blank" class="main__infobox__link">contact your local authority<i class="fa fa-external-link" aria-hidden="true"></i></a> to look into your complaint.`;
      }

      if (residence.address_state === `Manitoba`) {
        complaint_message = `Do you have a complaint about a long term care home? If this is a long term care home, in the province of Manitoba, then you can <a href="http://www.gov.mb.ca/health/protection/index.html" rel="nofollow" target="_blank" class="main__infobox__link">contact your local authority<i class="fa fa-external-link" aria-hidden="true"></i></a> to look into your complaint.`;
      }

      if (residence.address_state === `Alberta`) {
        complaint_message = `Do you have a complaint about a long term care home? If this is a long term care home, in the province of Alberta, then you can <a href="http://www.health.alberta.ca/services/continuing-care-complaints.html" rel="nofollow" target="_blank" class="main__infobox__link">contact your local authority<i class="fa fa-external-link" aria-hidden="true"></i></a> to look into your complaint.`;
      }

      if (residence.address_state === `British Columbia`) {
        complaint_message = `Do you have a complaint about a long term care home? If this is a long term care home, in the province of British Columbia, then you can <a href="http://www2.gov.bc.ca/gov/content/health/accessing-health-care/finding-assisted-living-or-residential-care/residential-care-facilities/making-a-complaint-about-a-residential-care-facility" rel="nofollow" target="_blank" class="main__infobox__link">contact your local authority<i class="fa fa-external-link" aria-hidden="true"></i></a> to look into your complaint.`;
      }

      if (residence.address_state === `Ontario`) {
        complaint_message = `Do you have a complaint about a long term care home? If this is a long term care home, in the province of
        Ontario,
        then you can <a href="https://www.ontario.ca/page/long-term-care-home-complaint-process" rel="nofollow"
          target="_blank" class="main__infobox__link">contact the Ministry of Health and Long-Term Care<i
            class="fa fa-external-link" aria-hidden="true"></i></a> to look into your complaint.`;
      }

      const data = {
        title: `${residence.name} - Updated 2020 Reviews - ${residence.address_state} - Elderoost`,
        residence: residence,
        newsArticles: newsArticles,
        reviews: reviews,
        complaint_message: complaint_message,
        canonical: `https://elderoostalpha.herokuapp.com/residences/${residence.slug}`,
        page_image: `https://elderoostalpha.herokuapp.com/residences/${residence.slug}/image`,
        csrfToken: req.csrfToken()
      };

      res.render(`residences/show`, data);
    } else {
      res.redirect(`/`);
    }
  } catch (_error) {
    console.error(`error in /residences/:slug : ${_error}`);
    res.redirect('/');
  }
});

router.post(
  '/:slug/news_articles/new',
  csrfProtection,
  async (req, res, next) => {
    const { slug } = req.params;

    if (req.user) {
      const { author_names, headline, publisher, url } = req.body;

      if (headline && publisher && url) {
        try {
          const residence = await Residence.findOne({
            where: { slug: `${slug}` }
          });

          if (residence) {
            await NewsArticle.create({
              author_names: author_names,
              headline: headline,
              publisher: publisher,
              url: url,
              residence_id: residence.id
            });
          }
        } catch (_e) {
          console.error(`ERROR in /:slug/news_articles/new : ${_e}`);
        }
      }
    }

    res.redirect(`/residences/${slug}`);
  }
);

router.post('/:slug/reviews/new', csrfProtection, async (req, res, next) => {
  const { slug } = req.params;

  try {
    if (req.user && req.user.email) {
      const { name, author, rating_value, description } = req.body;
      const author_email = req.user.email;

      if (author_email && name && rating_value && description) {
        const residence = await Residence.findOne({
          where: { slug: `${slug}` }
        });

        if (residence) {
          await Review.create({
            name: name,
            author: author,
            author_email: author_email,
            rating_value: rating_value,
            description: description,
            residence_id: residence.id
          });
        }
      }
    }
  } catch (_e) {
    console.error(`ERROR in /:slug/reviews/new : ${_e}`);
  }

  res.redirect(`/residences/${slug}`);
});

module.exports = router;
