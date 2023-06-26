const titleScreen = 'Chi tiết nhà hàng';
const users = require("../../models/restaurant/resraurantUserModels");
const restaurants = require("../../models/restaurant/restaurantModels");
const moment = require("moment");

//detail restaurant
exports.detail = async(req,res) =>{
    const idRestaurant = req.params.id
    if(idRestaurant){
        let restaurant = await restaurants.restaurantModal.findOne({_id:idRestaurant}).populate("idUserRestaurant","_id, userName");
        res.render('restaurants/detailrestautant',{titleScreen,restaurant,moment})
    }
    
}