const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController = require('../controller/admincontreoller');


router.post('/signup', body("email").isEmail(),
    body("password").isLength(5),
    adminController.signup);

router.post('/signin', body("email").isEmail(),
    body("password").isLength(5),
    adminController.signin);    

module.exports = router;
