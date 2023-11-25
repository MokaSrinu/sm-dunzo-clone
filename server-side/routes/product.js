const express = require('express');
const { configProductPost, getProductById } = require('../controllers/product');
const productRouter = express.Router();

productRouter.post('/api/product/config', configProductPost);
productRouter.get('/api/product/get', getProductById);

module.exports = productRouter;
