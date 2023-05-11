const express = require('express');
const { configStorePost } = require('../controllers/store');
const storeRouter = express.Router();

storeRouter.post('/api/store/config', configStorePost);

module.exports = storeRouter;
