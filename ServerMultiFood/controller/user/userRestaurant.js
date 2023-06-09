const titleScreen = 'Danh sách người dùng nhà hàng'
var restaurantUser = require("../../models/restaurant/resraurantUserModels");
var moment = require("moment");
exports.userRestaurant = async (req,res,next) => {
    let msg = "";
    const sortColumn = req.query.column;
    const sortType =
        sortColumn === res.locals._sort.column ? res.locals._sort.type : "default";
    const icons = {
        default: "bx bxs-sort-alt",
        esc: "bx bx-sort-down",
        desc: "bx bx-sort-up",
    };
    const types = {
        default: "desc",
        esc: "desc",
        desc: "esc",
    };
    const icon = icons[sortType];
    const type = types[sortType];
    if (req.method == "POST") {
        let newUser = new restaurantUser.userResraurantModel();
        newUser.userName = req.body.userName;
        newUser.passWord = req.body.passWord;
        newUser.fullName = req.body.fullName;
        newUser.birthDay = req.body.birthDay;
        newUser.phoneNumber = Number(req.body.phoneNumber);
        try {
            let saveUser = await newUser.save();
            msg = "Thêm thành công";
            console.log(saveUser);
        } catch (error) {
            msg = "Thêm thất bại";
            console.log(error);
        }
    }
    // panigation
    const { perPage, page, offset } = res.locals.pagination;
    const totalItemsCount = await restaurantUser.userResraurantModel.countDocuments();
    let listRestaurantUser = await restaurantUser.userResraurantModel.find().skip(offset).limit(perPage);
    const totalPages = Math.ceil(totalItemsCount / perPage);
    const displayedPages = [];
    // Xác định phạm vi hiển thị của các ô
    const range = 2; // Số ô được hiển thị trước và sau trang hiện tại
    let startPage = Math.max(1, page - range);
    let endPage = Math.min(totalPages, page + range);

    // Đảm bảo số lượng ô hiển thị không vượt quá tổng số trang
    if (endPage - startPage < range * 2) {
      if (startPage === 1) {
        endPage = Math.min(startPage + range * 2, totalPages);
      } else {
        startPage = Math.max(endPage - range * 2, 1);
      }
    }

    // Tạo mảng các trang hiển thị
    for (let i = startPage; i <= endPage; i++) {
      displayedPages.push(i);
    }

    if (req.query.hasOwnProperty("_sort")) {
        listRestaurantUser = await restaurantUser.userResraurantModel.find().limit(perPage).skip(offset).sort(
            {
                [req.query.column]: req.query.type === 'desc' ? -1 : 1
            }
        )
    }

   
    const formatUser = listRestaurantUser.map((item) => ({
        ...item.toObject(),
        dateCreateFormat: moment(item.createDay).format("L"),
        birthDayForMat: moment(item.birthDay).format("L"),
    }));
    res.render("users/restaurantUser", {
        titleScreen: titleScreen,
        users: formatUser,
        msg: msg,
        icon: icon,
        type: type,
        sortColumn: sortColumn,
        pagination: {
            perPage,
            page,
            offset,
            totalItemsCount,
            totalPages,
            displayedPages,
          },
    });
};
exports.deleteUser = async (req, res, next) => {
    try {
        await restaurantUser.userResraurantModel.deleteOne({ _id: req.params.id });

        res.redirect("back");
    } catch (error) {
        console.log(error);
    }
};