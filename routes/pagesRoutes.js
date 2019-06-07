const Category = require("../models/Category");
const { Product } = require("../models/Product");

module.exports = app => {
  app.get("/api/pages", (req, res) => {
    const getCategories = async () => {
      try {
        var categories = await Category.find({});
      } catch (err) {
        throw err;
      }
      return categories;
    };
    const getProducts = async () => {
      try {
        var products = await Product.find({});
      } catch (err) {
        throw err;
      }
      return products;
    };

    const popularProducts = async () => {
      //popularne produkty
    }

    Promise.all([getCategories(), getProducts()])
      .then(results => {
        res.send({
          categories: results[0],
          products: results[1]
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};
