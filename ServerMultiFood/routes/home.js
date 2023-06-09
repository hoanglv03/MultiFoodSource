var express = require('express');
var router = express.Router();
var homeController = require('../controller/home')
/* GET home page. */
router.get('/',homeController.home);
;

module.exports = router;