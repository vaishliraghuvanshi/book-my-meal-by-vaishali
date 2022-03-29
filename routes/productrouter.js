const express = require('express');
const router = express.Router();
const productController = require('../controller/productcontreoller');
const { body } = require('express-validator');
const multer = require('multer');
var storage = multer.diskStorage(   
 {
        destination: 'public/images',
        filename: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    }
);
var upload = multer({ storage: storage });
router.post("/add", upload.single('productImage'),
    body('productName').not().isEmpty(),
    body('productPrice').not().isEmpty(),
    body('productQty').not().isEmpty(),
    body('productDescription').not().isEmpty(),
    body('productDiscount').not().isEmpty(),
    body('productrating'),
    body('stock'),
    body('categoryId').not().isEmpty(),

    productController.add
);
router.get("/product-list", productController.getProduct);


router.delete("/delete-product/:id", productController.deleteProduct);

router.post("/update", upload.single('productImage'),
    body('productName').not().isEmpty(),
    body('productPrice').not().isEmpty(),Number,
    body('productQty').not().isEmpty(),
    body('productDescription').not().isEmpty(),
    body('productDiscount').not().isEmpty(),
    body('productrating'),
    body('categoryId').not().isEmpty(),
    
     productController.update
);
module.exports = router;