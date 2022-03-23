const express = require('express');
const router = express.Router();
const packageController = require("../controller/packagecontroller");
const { body } = require('express-validator');
const multer = require('multer');
var storage = multer.diskStorage(
    {
        destination: "public/images",
        filename: function (req, file, cb) {
            cb(null, Date.now() + "_" + file.originalname);
        }
    }

);
var upload = multer({ storage: storage });

router.post('/add', upload.single('packageImage'),
    body('packageName').not().isEmpty(),
    body('packagePrice').isNumeric(),
    body('packageQty').isNumeric(),
    body('packageDesc').not().isEmpty(),
    body('packageDiscount').isNumeric(),
    body('categoryId'),
    packageController.add
);

router.get('/package-list',packageController.getpackage);

module.exports =router;
