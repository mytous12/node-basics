const Product = require("../models/product");

exports.getAllProducts = async(req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

exports.getProductById = async(req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findByPk(productId);
    res.send(product);
  } catch(err) {
    console.log(err);
  }
}
