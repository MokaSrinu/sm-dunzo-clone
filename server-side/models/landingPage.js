const mongoose = require('mongoose');

const LandingPageSchema = mongoose.Schema(
    {
       bread_crum: [String],
       city: String,
       description: String,
       color_cards:[{
        image: String,
        text: String,
        special_text: String,
       }],
       plain_cards: [{
        image: String,
        text: String,
        special_text: String,
       }],
       areas_we_deliver: [String],
       special_banner:String,
    }, { timestamps: true },
);

const LandingPage = mongoose.model('LandingPage', LandingPageSchema);

module.exports = LandingPage;