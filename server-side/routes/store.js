const express = require('express');
const { configStorePost, getStoresByCategoryAndCity, getStoresById } = require('../controllers/store');
const storeRouter = express.Router();

storeRouter.post('/api/store/config', configStorePost);
storeRouter.get('/api/store/get-by-category', getStoresByCategoryAndCity);
storeRouter.get('/api/store/get', getStoresById);

module.exports = storeRouter;
