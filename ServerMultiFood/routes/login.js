var express = require('express');
var router = express.Router();
var loginController = require('../controller/login')
/* GET home page. */
router.get('/',loginController.login);
;

module.exports = router;