const Store = require("../models/store");
const { ObjectId } = require('mongodb');

const configStorePost = async (req, res, next) => {
  const {
    store_name,
    store_landmark,
    store_distance,
    store_banner_image,
    store_owner,
    store_location,
    license_no,
    category,
    city,
    offers,
    types_of_category,
  } = req.body;
  const newStore = {
    store_name,
    store_landmark,
    store_distance,
    store_banner_image,
    store_owner,
    store_location,
    license_no,
    category,
    city,
    offers,
    types_of_category,
  };
  try {
    await Store.create(newStore);
    return res.status(201).json({
      success: true,
      message: `Successfully Configured ${store_name}`,
      data: newStore,
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

const getStoresByCategoryAndCity = async (req, res, next) => {
    const { city, category } = req.query;
    try {
        const cityRegex = new RegExp('^' + `${city}` + '$', 'i');
        const categoryRegex = new RegExp('^' + `${category}` + '$', 'i');
        const storesByCategory = await Store.find({ city: cityRegex, 'category.value': categoryRegex });
        if (storesByCategory) {
            return res.status(201).json({
                success: true,
                message: `Successfully found stores in ${city} for ${category}`,
                data: storesByCategory
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'data not found',
                data: storesByCategory
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

const getStoresById = async (req, res, next) => {
  const { store_id } = req.query;
  const storeId = new ObjectId(store_id);
  try {
      const storesById = await Store.find({ _id: storeId});
      if (storesById) {
          return res.status(201).json({
              success: true,
              message: `Successfully found store`,
              data: storesById
          });
      } else {
          return res.status(404).json({
              success: false,
              message: 'data not found',
              data: storesById
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
    configStorePost,
    getStoresByCategoryAndCity,
    getStoresById,
};
