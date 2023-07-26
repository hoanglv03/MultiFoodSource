var db = require("../config/db");
const food = new db.mongoose.Schema(
  {
    nameFood: { type: String, required: true },
    price: { type: Number, required: true },
    idRestaurant: {
      type: db.mongoose.Schema.Types.ObjectId,
      ref: "restaurants",
    },
    avatarName: { type: String, required: true },
    avatar: { data: Buffer, contentType: String },
  },
  {
    collection: "foods",
  }
);

let foodModal = db.mongoose.model('foods',food)
module.exports = {foodModal}
