const { Product } = require("../models/Product");
const Category = require("../models/Category");

exports.findPopularProducts = async ({
  categoryName,
  limit,
  sort = { rate: -1, visited: -1 }
}) => {
  const popularProducts = await Product.aggregate([
    { $sort: sort },
    { $limit: limit },
    {
      $project: {
        _id: 1,
        name: 1,
        hero_image: 1,
        photos: 1,
        description: 1,
        price: 1,
        info: 1,
        currency: 1,
        bought: 1,
        rate: 1,
        visited: 1
      }
    }
  ]);
  return popularProducts;
};
