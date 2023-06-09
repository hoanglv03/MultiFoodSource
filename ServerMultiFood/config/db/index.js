const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MultiFood').catch(err=>{
            console.log("Connect thành công");
            console.log(err);
        });
module.exports = {mongoose}