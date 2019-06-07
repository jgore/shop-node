const mongoose = require("mongoose");
const { Schema } = mongoose;

const product = {
  name: {
    type: String,
    required: true
  },
  hero_image: {
    type: String
  },
  photos: {
    type: Array,
    default: []
  },
  description: {
    type: String,
    default: ""
  },
  price: {
    type: Number
  },
  info: {
    type: Array,
    default: []
  },
  currency: {
    type: String,
    default: "PLN",
    required: true
  },
  bought: {
    type: Number,
    default: 0,
    required: true
  },
  rate: {
    type: Number,
    default: 0,
    required: true
  }
};

const productSchema = new Schema({
  ...product,
  versions: [product]
});

const Product = mongoose.model("products", productSchema);

module.exports = {
  Product,
  productSchema
};
