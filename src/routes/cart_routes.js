const cartRoutes = require('express').Router();
const CartController = require('./../controllers/cart_controller');

cartRoutes.post("/",CartController.addToCart);
cartRoutes.delete("/",CartController.removeFromCart);
cartRoutes.get("/:user",CartController.getCartForUser);

module.exports = cartRoutes;
