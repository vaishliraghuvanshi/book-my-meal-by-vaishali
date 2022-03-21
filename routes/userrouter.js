const express = require('express');
const router = express.Router();
const UserController = require('../controller/usercontreoller');
const { body } = require('express-validator');

router.post("/add", 
    body('userName').not().isEmpty(),
    body('email').not().isEmpty(),
    body('password').isLength(5),
    body('mobile').isLength(10),
    body('gender').not().isEmpty(),
   // body('categoryId').not().isEmpty(),

    UserController.add
);
router.post("/delete-user", UserController.deleteuser);

router.post("/update", 
    body('userName').not().isEmpty(),
    body('email').not().isEmpty(),
    body('password').isLength(5),
    body('mobile').isLength(10),
    body('gender').not().isEmpty(),
    //body('categoryId').not().isEmpty()

     UserController.update
);
module.exports = router;