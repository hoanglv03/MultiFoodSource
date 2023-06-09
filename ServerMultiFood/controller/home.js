let titleScreen = 'Trang chủ'
exports.home = (req,res,next) =>{
    res.render('home/home',{titleScreen:titleScreen})
}