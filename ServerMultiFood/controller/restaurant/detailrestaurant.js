const titleScreen = 'Chi tiết nhà hàng';
const users = require("../../models/restaurant/resraurantUserModels");
const restaurants = require("../../models/restaurant/restaurantModels");
const foods = require("../../models/foodModal");
const moment = require("moment");
var fs = require("fs");
//detail restaurant
exports.detail = async(req,res) =>{
    const idRestaurant = req.params.id
    if(idRestaurant){
        let restaurant = await restaurants.restaurantModal.findOne({_id:idRestaurant}).populate("idUserRestaurant","_id, userName");
        if(req.method === "POST"){
            try{
                let food = new foods.foodModal({
                    nameFood: req.body.nameFood,
                    price: req.body.price,
                    idRestaurant: idRestaurant,
                    avatarName: req.file.originalname,
                    avatar:{
                        data:fs.readFileSync(req.file.path),
                        contentType: req.file.mimetype
                    }
                });
                fs.rename(
                    req.file.path,
                    "./public/upload/" + req.file.originalname,
                    (err) => {
                      if (err) {
                        console.log(err);
                      } else {
                        console.log("URL : http://localhost:3000" + req.file.originalname);
                      }
                    }
                  );
                  await food.save()
                  console.log("Thêm mới thành công");
            }catch(e){
                console.log("Thêm mới thất bại");
                console.log(e);
            }
        }
        let listFood = await foods.foodModal.find({idRestaurant:idRestaurant})
        
        res.render('restaurants/detailrestautant',{titleScreen,restaurant,moment,listFood})
    }
    
}