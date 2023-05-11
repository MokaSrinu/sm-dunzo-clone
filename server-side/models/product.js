const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    images: [String],
    product_name: String,
    product_quantity: String,
    product_cost: String,
    store: {
      type: mongoose.Types.ObjectId,
      ref: "Store",
    },
    product_subcategory: String,
    product_description: String,
    important_information: {
      country_of_origin: String,
      shelf_life: String,
      description: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
