var btnSucsess = document.querySelector(".btn-suscess");
var showMessage = document.querySelector(".showMessage");
var username = document.querySelector(".username");
var password = document.querySelector(".password");
var fullname = document.querySelector(".fullname");
var birthDay = document.querySelector(".birthDay");
var phoneNumber = document.querySelector(".phoneNumber");

username.onfocus = () => {
  showMessage.innerHTML = "";
};
password.onfocus = () => {
  showMessage.innerHTML = "";
};
fullname.onfocus = () => {
  showMessage.innerHTML = "";
};
phoneNumber.onfocus = () => {
  showMessage.innerHTML = "";
};

btnSucsess.addEventListener("click", (e) => {
  console.log();
  function message(msg) {
    showMessage.innerHTML = `<div class="alert alert-danger" role="alert">${msg}</div>`;
    e.preventDefault();
  }
  if (
    username.value.trim().length == 0 ||
    password.value.trim().length == 0 ||
    fullname.value.trim().length == 0 ||
    phoneNumber.value.trim().length == 0 ||
    birthDay.value.trim().length == 0
  ) {
    message("Không được bỏ trống");
  } else if (username.value.trim().length < 7) {
    message("Tên user phải trên 7 kí tự");
  } else if (password.value.trim().length < 7) {
    message("Mật khẩu phải trên 7 kí tự");
  } else if (fullname.value.trim().length < 7) {
    message("Họ và tên phải trên 7 kí tự");
  } else if (!isNaN(fullname.value.trim())) {
    message("Họ và tên không được là số");
  } else if (phoneNumber.value.trim().length < 9) {
    message("Số điện thoai phải trên 9 kí tự");
  } else if (phoneNumber.value.trim() <= 0) {
    message("Số điện thoại phải là số dương");
  }
  
});
