const Store = require("../models/store");

const configStorePost = async (req, res, next) => {
  const {
    store_name,
    store_landmark,
    store_distance,
    store_banner_image,
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

// const getLandingPageByCity = async (req, res, next) => {
//     const { city } = req.query;
//     try {
//         const cityRegex = new RegExp('^' + `${city}` + '$', 'i');;
//         const cityLandingPage = await LandingPage.findOne({ city: cityRegex });
//         if (cityLandingPage) {
//             return res.status(201).json({
//                 success: true,
//                 message: `Successfully found ${city}`,
//                 data: cityLandingPage
//             });
//         } else {
//             return res.status(404).json({
//                 success: false,
//                 message: 'data not found',
//                 data: cityLandingPage
//             })
//         }

//     } catch (error) {
//         return res.status(412).send({
//             success: false,
//             message: error.message
//         })
//     }
//     finally {
//         next();
//     }
// }

module.exports = {
    configStorePost,
};
