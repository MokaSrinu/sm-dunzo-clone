const Product = require("../models/product");

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

module.exports = {
    configProductPost,
};
