const express = require('express');
const router = express.Router();
const wishlistController = require("../controller/wishlistcontreoller");

router.post('/add-To-wishlist', wishlistController.addTowishlist);

router.get('/view-wishlist/:userId', wishlistController.viewwishlist);

router.post('/update/:userId/:prodcutId', wishlistController.updatewishlist);

module.exports = router;
