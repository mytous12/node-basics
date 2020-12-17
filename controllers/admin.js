const Product = require("../models/product");

exports.addProduct = (req, res, next) => {
  Product.create({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
  })
    .then((result) => {
      res.send("Addded product successfully");
    })
    .catch((err) => console.log(err));
};

exports.editProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    await Product.update(
      {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
      },
      {
        where: { id: productId },
      }
    );
    res.send("Product edited succesfully");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async(req, res, next) => {
  const productId = req.params.productId;
  try {
    await Product.destroy({
      where: {
        id: productId
      }
    })
    res.send('Product deleted successfully');
  } catch(err) {
    console.log(err);
  }
}


exports.deleteAllProducts = async(req, res, next) => {
  try {
    await Product.destroy({
      truncate: true
    })
    res.send('Deleted all products successfully');
  } catch(err) {
    console.log(err);
  }
}