var express = require('express');
var router = express.Router();
var restaurantController = require('../../controller/restaurant/restaurant')
var multer = require('multer')
var objUpload = multer({dest:'./tmp'})


router.get('/',restaurantController.restaurants);
router.post('/',objUpload.single('avatar'),restaurantController.restaurants);
router.post('/search',restaurantController.searchUser);
module.exports = router;