const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Category = require("../models/Category");
const { Product } = require("../models/Product");

module.exports = mongoURI => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, err => {
    if (err) {
      throw new Error(`Problem with connect to Mongo Database: ${mongoURI}`);
    }
    console.log(`[MONGODB] Connected to Mongo Database: ${mongoURI}`);

    if (process.env.NODE_ENV != "production") {
      fs.readFile(
        path.join(__dirname, "../data/categories.json"),
        (err, data) => {
          if (err) {
            console.log(`[MONGODB] Problem with load mock data from file`);
          }

          const parsed = JSON.parse(data);
          const { categories } = parsed,
            products = [];

          for (let i = 0; i < categories.length; i++) {
            for (let k = 0; k < categories[i].products.length; k++) {
              products.push(categories[i].products[k]);
            }
          }

          Category.deleteMany({})
            .then(() => {
              Category.insertMany(categories)
                .catch(err => {
                  console.log(err);
                  console.log(
                    "Error while inserting courses (duplication key)"
                  );
                });
            })
            .catch(err => {
              console.log(err);
            });
          Product.deleteMany({}).then(() => {
            Product.insertMany(products)
              .catch(err => {
                console.log(err);
                console.log("Error while inserting products (duplication key)");
              });
          });
        }
      );
    }
  });
};
