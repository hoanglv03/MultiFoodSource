var express = require('express');
var router = express.Router();
var userResraurantController = require('../../controller/user/userRestaurant')

router.get('/',userResraurantController.userRestaurant);
router.post('/',userResraurantController.userRestaurant);
router.post('/:id/delete',userResraurantController.deleteUser)

module.exports = router;