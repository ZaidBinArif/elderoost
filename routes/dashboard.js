const Express = require('express');
const router = Express.Router();

const Residence = require('../models/residence');
const Review = require('../models/review');
const User = require('../models/user');
const NewsArticle = require('../models/news_article');

function authorizeAdmin(req, res, next) {
  if (req.user && req.user.is_admin) {
    next();
  } else {
    res.redirect('/');
  }
}

// get dashboard
router.get('/', authorizeAdmin, (req, res, next) => {
  res.render('dashboard/index');
});

// get residence dashboard
router.get('/residences', authorizeAdmin, async (req, res, next) => {
  const residences = await Residence.findAll();

  res.render('dashboard/residences', {
    residences: residences
  });
});

router.get('/residences/new', authorizeAdmin, (req, res, next) => {
  res.render('dashboard/residences-new');
});

router.post('/residences/new', authorizeAdmin, async (req, res, next) => {
  const {
    name,
    address,
    latitude,
    longitude,
    status,
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
    latitude: latitude,
    longitude: longitude,
    status: status,
    address_num: address_num,
    address_street: address_street,
    address_city: address_city,
    address_state: address_state,
    postal_code: postal_code,
    address_country: address_country,
    slug: slug,
    address_city_slug: address_city_slug,
    address_state_slug: address_state_slug
  });

  if (residence) {
    res.redirect(`/dashboard/residences/${slug}`);
  } else {
    res.redirect(`/dashboard/residences/new`);
  }
});

router.get('/residences/:slug', authorizeAdmin, async (req, res, next) => {
  const { slug } = req.params;

  const residence = await Residence.findOne({ where: { slug: `${slug}` } });

  res.render('dashboard/residences-edit', {
    residence: residence
  });
});

router.post('/residences/:slug', authorizeAdmin, async (req, res, next) => {
  const paramSlug = req.params.slug;
  // const address_country = `Canada`;

  const {
    name,
    address,
    latitude,
    longitude,
    status,
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

  const residence = await Residence.findOne({
    where: { slug: `${paramSlug}` }
  });

  if (residence) {
    residence.name = name;
    residence.address = address;
    residence.latitude = latitude;
    residence.longitude = longitude;
    residence.status = status;
    residence.address_num = address_num;
    residence.address_street = address_street;
    residence.address_city = address_city;
    residence.address_state = address_state;
    residence.postal_code = postal_code;
    residence.address_country = address_country;
    residence.slug = slug;
    residence.address_city_slug = address_city_slug;
    residence.address_state_slug = address_state_slug;

    await residence.save();
  }

  res.redirect(`/dashboard/residences/${slug}`);
});

router.get(
  '/residences/:slug/delete',
  authorizeAdmin,
  async (req, res, next) => {
    const { slug } = req.params;
    const residence = await Residence.findOne({ where: { slug: `${slug}` } });

    if (residence) {
      await residence.destroy();
    }

    res.redirect('/dashboard/residences');
  }
);

// get reviews dashboard
router.get('/reviews', authorizeAdmin, async (req, res, next) => {
  const reviews = await Review.findAll({ include: [{ model: Residence }] });

  res.render('dashboard/reviews', { reviews: reviews });
});

router.get('/reviews/:uuid', authorizeAdmin, async (req, res, next) => {
  const { uuid } = req.params;
  const review = await Review.findOne({
    where: { id: `${uuid}` },
    include: [{ model: Residence }]
  });

  if (review) {
    res.render('dashboard/reviews-edit', { review: review });
  }
});

router.post('/reviews/:uuid', authorizeAdmin, async (req, res, next) => {
  const { uuid } = req.params;
  const {
    name,
    author,
    author_email,
    rating_value,
    description,
    status
  } = req.body;

  const review = await Review.findOne({ where: { id: `${uuid}` } });

  if (review) {
    review.name = name;
    review.author = author;
    review.author_email = author_email;
    review.rating_value = rating_value;
    review.description = description;
    review.status = status;

    await review.save();
  }

  res.redirect(`/dashboard/reviews/${uuid}`);
});

router.get('/reviews/:uuid/delete', authorizeAdmin, async (req, res, next) => {
  const { uuid } = req.params;
  const review = await Review.findOne({ where: { id: `${uuid}` } });

  if (review) {
    await review.destroy();
  }

  res.redirect('/dashboard/reviews');
});

// get news articles
router.get('/news_articles', authorizeAdmin, async (req, res, next) => {
  const news_articles = await NewsArticle.findAll({
    include: [{ model: Residence }]
  });

  res.render('dashboard/news_articles', { news_articles: news_articles });
});

router.get(
  '/residences/:slug/news_article/new',
  authorizeAdmin,
  async (req, res, next) => {
    const { slug } = req.params;

    const residence = await Residence.findOne({ where: { slug: `${slug}` } });

    if (residence) {
      res.render('dashboard/news_articles-new', {
        residence: residence
      });
    }
  }
);

router.post(
  '/residences/:slug/news_articles/new',
  authorizeAdmin,
  async (req, res, next) => {
    const { slug } = req.params;
    const { author_names, headline, publisher, url, status } = req.body;
    const residence = await Residence.findOne({ where: { slug: `${slug}` } });

    if (residence) {
      const article = await NewsArticle.create({
        author_names: author_names,
        headline: headline,
        publisher: publisher,
        url: url,
        status: status,
        residence_id: residence.id
      });

      if (article) {
        res.redirect(`/dashboard/news_articles/${article.id}`);
      }
    }
  }
);

router.get('/news_articles/:uuid', authorizeAdmin, async (req, res, next) => {
  const { uuid } = req.params;

  const news_article = await NewsArticle.findOne({
    where: { id: `${uuid}` },
    include: [{ model: Residence }]
  });

  res.render('dashboard/news_articles-edit', {
    news_article: news_article
  });
});

router.post('/news_articles/:uuid', authorizeAdmin, async (req, res, next) => {
  const { uuid } = req.params;
  const { author_names, headline, publisher, url, status } = req.body;
  const news_article = await NewsArticle.findOne({ where: { id: `${uuid}` } });

  if (news_article) {
    news_article.author_names = author_names;
    news_article.headline = headline;
    news_article.publisher = publisher;
    news_article.url = url;
    news_article.status = status;

    await news_article.save();
  }

  res.redirect(`/dashboard/news_articles/${uuid}`);
});

router.get(
  '/news_articles/:uuid/delete',
  authorizeAdmin,
  async (req, res, next) => {
    const { uuid } = req.params;

    const article = await NewsArticle.findOne({ where: { id: `${uuid}` } });

    if (article) {
      await article.destroy();
    }

    res.redirect('/dashboard/news_articles');
  }
);

module.exports = router;
