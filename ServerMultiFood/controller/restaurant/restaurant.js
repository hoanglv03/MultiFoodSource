const titleScreen = 'Danh sách nhà hàng'
const users = require("../../models/restaurant/resraurantUserModels");
const restaurants = require("../../models/restaurant/restaurantModels");
var fs = require("fs");
let msg = ''
let limit = 10;

// show list of restaurant
exports.restaurants = async(req, res, next) => {
  if(req.method === 'POST') {
    try {
      console.log('Đã chạy vào đây');
      const user = await users.userResraurantModel.findOne({userName: req.body.username})
      console.log(users);
      if(!users){
        console.log('Tài khoản không tồn tại');
        res.render('restaurants/restaurant',{titleScreen,listRestaurant})
      }
      let newRestaurant = new restaurants.restaurantModal({
        nameRestaurant: req.body.nameRestaurant,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        idUserRestaurant: user._id,
        avatarName: req.file.originalname,
        avatar: {
          data: fs.readFileSync(req.file.path),
          contentType: req.file.mimetype
        },
        description: req.body.description,
        category: req.body.tags
      });
      
      console.log(newRestaurant);
      try {
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
        await newRestaurant.save();
        msg ='Thêm mới thành công'
      } catch (error) {
        msg ='Thêm mới thất bại'
        console.log('Thêm thất bại ',error);
      }

    } catch (error) {
      msg ='Thêm mới thất bại'
      console.log('Thêm thất bại 2',error);
    }
  }
  let listRestaurant = await restaurants.restaurantModal.find().populate("idUserRestaurant","_id, userName").limit(limit);
  res.render('restaurants/restaurant',{titleScreen,msg,listRestaurant})
}
// show list search users
exports.searchUser = async(req, res) => {
  let payload = req.body.payload.trim();
  let search = await users.userResraurantModel.find({userName:{$regex: new RegExp('^'+payload+'.*','i')}}).exec();
  //limit results
  search = search.slice(0,7);
  res.send({payload:search});
}
