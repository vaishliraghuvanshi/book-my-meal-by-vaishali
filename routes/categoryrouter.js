const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categorycontreoller');
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
router.post("/add", upload.single('categoryImage'),
    body('categoryName').not().isEmpty(),
    categoryController.add
);
router.get("/category-list",categoryController.getCategory);


router.delete("/delete-category/:id", categoryController.deleteCategory);

router.post("/update", upload.single('categoryImage'),
    body('categoryName').not().isEmpty(),
    body("categoryId").not().isEmpty()
    , categoryController.update
);
module.exports = router;