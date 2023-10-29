const ProductRoutes = require('express').Router();
const ProductController = require('./../controllers/product_controller');

ProductRoutes.get("/",ProductController.fetchAllProducts);
ProductRoutes.get("/category/:id",ProductController.fetchAllProductsByCategory);
ProductRoutes.post("/",ProductController.createProduct);

module.exports = ProductRoutes;
