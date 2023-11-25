const mongoose = require('mongoose');

const StoreSchema = mongoose.Schema(
    {
       store_name: String,
       store_landmark: String,
       store_distance: String,
       store_banner_image: String,
       store_owner: String,
       store_location: String,
       license_no: String,
       category: {
        label: String,
        value: String,
       },
       city: String,
       offers:[{
        image: String,
        text: String,
       }],
       types_of_category: [String],
    }, { timestamps: true },
);

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;