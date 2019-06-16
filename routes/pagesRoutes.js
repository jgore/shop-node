const Category = require("../models/Category");
const { Product } = require("../models/Product");
const { findPopularProducts } = require("../repos/ProductRepo");

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

    Promise.all([
      getCategories(),
      getProducts(),
      findPopularProducts({ limit: 3 })
    ])
      .then(results => {
        let exclude = [];
        for (let i = 0; i < results[2].length; i++) {
          exclude.push(results[2][i]._id.toString());
        }
        results[1] = results[1].filter((value, index) => {
          return exclude.includes(value._id.toString()) == false;
        });
        res.send({
          categories: results[0],
          products: results[1],
          popular: results[2]
        });
      })
      .catch(err => {
        console.log(err);
      });
  });
};
