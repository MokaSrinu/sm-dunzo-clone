const LandingPage = require('../models/landingPage');

const configLandingPagePost = async (req, res, next) => {
    const { bread_crums, city, description, color_cards, plain_cards, areas_we_deliver, special_banner } = req.body;
    const newLandingPage = {
        bread_crums,
        city,
        description,
        color_cards,
        plain_cards,
        areas_we_deliver,
        special_banner,
    };
    try {
        await LandingPage.create(newLandingPage);
        return res.status(201).json({
            success: true,
            message: `Successfully Configured ${city}`,
            data: newLandingPage
        });
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
    finally{
        next();
    }
};

const getLandingPageByCity = async (req, res, next) => {
    const { city } = req.query;
    try {
        const cityLandingPage = await LandingPage.findOne({city: `${city}`});
        return res.status(201).json({
            success: true,
            message: `Successfully found ${city}`,
            data: cityLandingPage
        });
    } catch (error) {
        return res.status(412).send({
            success: false,
            message: error.message
        })
    }
    finally{
        next();
    }
}




module.exports = {
    configLandingPagePost,
    getLandingPageByCity
}