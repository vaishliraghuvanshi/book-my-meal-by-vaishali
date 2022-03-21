const express = require('express');
const router = express.Router();
const supportController = require('../controller/supportcontreoller');
const { body } = require('express-validator');

router.post("/add", 
    body('query'),
    body('currentDate'),
    body('userid').not().isEmpty(),
    body('productid').not().isEmpty(),

    supportController.add
);
router.get("/view-query", supportController.getquery);
module.exports = router;