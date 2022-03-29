const express = require('express');
const router = express.Router();
const UserController = require('../controller/usercontreoller');
const { body } = require('express-validator');

router.post('/signup', body("email").isEmail(),
    body("password").isLength(5),
    UserController.signup);

router.post('/signin', body("email").isEmail(),
    body("password").isLength(5),
    UserController.signin);

router.post('/update',UserController.updateprofile);
module.exports = router;