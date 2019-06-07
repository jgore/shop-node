const mongoose = require("mongoose");
const { Schema } = mongoose;
const { productSchema } = require("./Product");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  icon: {
    type: String,
    default: "shopping-bag"
  },
  products: [productSchema]
});

const Category = mongoose.model("categories", categorySchema);

module.exports = Category;
