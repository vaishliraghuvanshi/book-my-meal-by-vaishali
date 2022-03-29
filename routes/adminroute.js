const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController = require('../controller/admincontreoller');
const categoryController = require('../controller/categorycontreoller');
const productController = require('../controller/productcontreoller');
const orderController = require('../controller/ordercontreoller');
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
router.post("/add-product", upload.single('productImage'),
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
    body('stock'),
    body('categoryId').not().isEmpty(),

     productController.update
);

router.post("/add", upload.single('categoryImage'),
    body('categoryName').not().isEmpty(),
    categoryController.add
);
router.get("/category-list", categoryController.getCategory);


router.delete("/delete-category/:id", categoryController.deleteCategory);

router.post("/update", upload.single('categoryImage'),
    body('categoryName').not().isEmpty(),
    body("categoryId").not().isEmpty()
    , categoryController.update
);

//router.post('/signup', body("email").isEmail(),
  //  body("username").isAlpha(),
    //body("password").isLength(5),
    //adminController.signup);

router.post('/signin', body("email").isEmail(),
    body("password").isLength(5),
    adminController.signin);

router.post('/update-profile',adminController.updateProfile)
router.post("/AddToBlock/:id", adminController.AddToBlock);
router.post("/RemoveFromBlock/:id", adminController.RemoveFromBlock);

router.get("/customer-list", adminController.getList);

router.post("/user/delete-user", adminController.deleteuser);


router.post("/user/update",
    body('userName').not().isEmpty(),
    body('email').not().isEmpty(),
    body('password').isLength(5),
    body('mobile').isLength(10),
    body('gender').not().isEmpty(),
    //body('categoryId').not().isEmpty()

    adminController.update
);
router.get("/view-order", orderController.getorder);


router.post("/place-order", 
    orderController.add
);
module.exports = router;