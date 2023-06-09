module.exports = function sortMiddleware(req, res, next) {
  res.locals._sort = {
      enabled: true,
      columns: {
        fullname: { type: "default", icon: "bx bxs-sort-alt" },
        userName: { type: "default", icon: "bx bxs-sort-alt" },
        birthDay: { type: "default", icon: "bx bxs-sort-alt" },
        createDay: { type: "default", icon: "bx bxs-sort-alt" }
      }
    };
  
    if (req.query.hasOwnProperty("_sort")) {
      res.locals._sort.enabled = true;
      const sortColumn = req.query.column;
      res.locals._sort.column = sortColumn;
      res.locals._sort.type = req.query.type;
      // Update icon and type for the clicked column
      for (const column in res.locals._sort.columns) {
        if (column === sortColumn) {
          res.locals._sort.columns[column].icon =
            req.query.type === "desc" ? "bx bx-sort-up" : "bx bx-sort-down";
          res.locals._sort.columns[column].type =
            req.query.type === "desc" ? "esc" : "desc";
        } else {
          res.locals._sort.columns[column].icon = "bx bxs-sort-alt";
          res.locals._sort.columns[column].type = "default";
         
        }
      }
    }
  
    next();
}