const express = require('express');
const { configLandingPagePost, getLandingPageByCity } = require('../controllers/landingPage');
const landingPageRouter = express.Router();

landingPageRouter.get('/api/landing-page', getLandingPageByCity);
landingPageRouter.post('/api/landing-page/config', configLandingPagePost);

module.exports = landingPageRouter;
