const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product', activeAddProduct: true, formCSS: true, productCSS: true });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { prods: products, docTitle: 'Shop', path: '/', pageTitle: 'Shop', hasProducts: products.length > 0, acitveShop: true, productCSS: true });
  });
}
