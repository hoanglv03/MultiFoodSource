const paginationMiddleware = (perPage) => {
    return (req, res, next) => {
      const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là 1
      const offset = (page - 1) * perPage; // Vị trí bắt đầu lấy dữ liệu từ cơ sở dữ liệu
      // Thêm thông tin phân trang vào đối tượng res.locals để truyền cho view
      res.locals.pagination = {
        perPage,
        page,
        offset,
      };
  
      next(); // Chuyển đến middleware tiếp theo
    };
  };
  
  module.exports = paginationMiddleware;