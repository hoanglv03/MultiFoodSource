var db = require('../config/db')
var user = new db.mongoose.Schema(
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
    },{
        collection:'users'
    }
)
let userModel = db.mongoose.model('users',user)
module.exports = {userModel}