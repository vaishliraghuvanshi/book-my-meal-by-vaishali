const express = require('express');
const router = express.Router();
const orderController = require('../controller/ordercontreoller');
const { body } = require('express-validator');

router.post("/add", 
    body('orderQty'),
    body('orderAddress'),
    body('orderNumber'),
    body('userId').not().isEmpty(),
    body('productId').not().isEmpty(),
    body('currentDate'),

    orderController.add
);
router.get("/view-order", orderController.getorder);
module.exports = router;