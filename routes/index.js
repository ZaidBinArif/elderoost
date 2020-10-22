var express = require('express');
var router = express.Router();

const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const { Op } = require('sequelize');
const Residence = require('../models/residence');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const residences = await Residence.findAll({
    where: { status: 'confirmed' },
    order: [['updated_at', 'DESC']],
    limit: 12
  });

  const data = {
    title: `Explore senior care residences near you - Elderoost`,
    residences: residences
  };
  res.render('index', data);
});

router.get('/about', function(req, res, next) {
  res.render('static/about', {
    title: `About - Elderoost`
  });
});

router.get('/sitemap/list', async (req, res, next) => {
  if (req.user && req.user.is_admin) {
    res.header('Content-Type', 'text/plain');

    const HOST = `https://elderoostalpha.herokuapp.com`;
    const residences = await Residence.findAll();
    const links = residences.map(residence => {
      return `${HOST}/residences/${residence.slug}`;
    });

    res.send(links.join('\n'));
  }
});

router.post('/search', csrfProtection, async (req, res, next) => {
  try {
    const { search } = req.body;

    const residences = await Residence.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { address: { [Op.iLike]: `%${search}%` } }
        ]
      }
    });

    res.render('static/search', {
      title: `Search residences - Elderoost`,
      residences: residences,
      search: search,
      csrfToken: req.csrfToken()
    });
  } catch (_error) {
    console.error(`error in /search on POST : ${_error}`);
    res.render('static/search');
  }
});

router.get('/search', csrfProtection, function(req, res, next) {
  res.render('static/search', {
    title: `Search residences - Elderoost`,
    csrfToken: req.csrfToken()
  });
});

router.get('/privacy', function(req, res, next) {
  res.render('static/privacy', { title: `Privacy - Elderoost` });
});

router.get('/tos', function(req, res, next) {
  res.render('static/tos', { title: `Terms of Service - Elderoost` });
});

module.exports = router;
