var db = require("../../config/db");
const userRestaurant = new db.mongoose.Schema(
  {
    nameRestaurant: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    category: { type: Array, required: true },
    idUserRestaurant: {
      type: db.mongoose.Schema.Types.ObjectId,
      ref: "resraurant-users",
    },
    avatarName: { type: String, required: true },
    avatar: { data: Buffer, contentType: String },
    createAt: { type: Date, required: true, default: Date.now() },
    status: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    rate:{type:Number,default:5},
  },
  { collection: "restaurants" }
);

let restaurantModal = db.mongoose.model('restaurants',userRestaurant);
module.exports = {restaurantModal};


