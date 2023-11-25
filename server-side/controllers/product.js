const Product = require("../models/product");
const { ObjectId } = require('mongodb');

const configProductPost = async (req, res, next) => {
  const {
    images,
    product_name,
    product_quantity,
    product_cost,
    store,
    product_subcategory,
    product_description,
    important_information,
  } = req.body;
  const newProduct = {
    images,
    product_name,
    product_quantity,
    product_cost,
    store,
    product_subcategory,
    product_description,
    important_information,
  };
  try {
    await Product.create(newProduct);
    return res.status(201).json({
      success: true,
      message: `Successfully Configured ${product_name}`,
      data: newProduct,
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  } finally {
    next();
  }
};

const getProductById = async (req, res, next) => {
  const { product_id } = req.query;
  const productId = new ObjectId(product_id);
  try {
      const productsById = await Product.find({ _id: productId});
      if (productsById) {
          return res.status(201).json({
              success: true,
              message: `Successfully found product`,
              data: productsById
          });
      } else {
          return res.status(404).json({
              success: false,
              message: 'data not found',
              data: productsById
          })
      }

  } catch (error) {
      return res.status(412).send({
          success: false,
          message: error.message
      })
  }
  finally {
      next();
  }
}

module.exports = {
    configProductPost,
    getProductById,
};
