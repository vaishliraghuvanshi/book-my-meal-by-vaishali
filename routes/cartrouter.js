const express = require('express');
const router = express.Router();
const cartController =require("../controller/cartcontreoller");

router.post('/add-To-Cart',cartController.addToCart);

router.get('/view-cart/:userId',cartController.viewcart);

router.post('/update-cart/:userId/:prodcutId',cartController.updatecart);

module.exports = router;
