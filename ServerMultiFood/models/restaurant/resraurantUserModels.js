var db = require('../../config/db')
var userRestaurant = new db.mongoose.Schema(
    {
        userName:{type:String,require:true},
        passWord:{type:String,require:true},
        avatar:{type:String,default:null},
        phoneNumber:{type:Number,require:true},
        addRess:{type:String,default:null},
        fullName:{type:String,require:true},
        birthDay:{type:Date,require:true},
        createDay:{type:Date,default: Date.now},
        email:{type:String,default:null},
        role:{type:Number,default:1},
        status:{type:Number,default:1,require:true},
    },{
        collection:'resraurant-users'
    }
)
let userResraurantModel = db.mongoose.model('resraurant-users',userRestaurant)
module.exports = {userResraurantModel}