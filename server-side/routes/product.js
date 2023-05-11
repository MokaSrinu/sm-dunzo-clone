const express = require('express');
const { configProductPost } = require('../controllers/product');
const productRouter = express.Router();

productRouter.post('/api/product/config', configProductPost);

module.exports = productRouter;
