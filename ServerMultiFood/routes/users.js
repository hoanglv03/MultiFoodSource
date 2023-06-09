var express = require('express');
var router = express.Router();
var userController = require('../controller/user/user')
/* GET users listing. */
router.get('/',userController.users);
router.post('/',userController.users);
router.post('/:id/delete',userController.deleteUser)
module.exports = router;
