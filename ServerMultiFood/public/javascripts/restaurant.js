const $ = document.querySelector.bind(document);
const ulElement = $("#searchResults");
const liNotFound = $(".item-not-found");
const userName = $(".username");
const formRestaurant = $("#form-restaurant");
const avatar = $(".avatar"),
  nameRestaurant = $(".nameRestaurant"),
  address = $(".address"),
  phoneNumber = $(".phoneNumber"),
  description = $(".description"),
  showMessage = $(".showMessage"),
  btnSucsess = $(".btn-suscess"),
  category = $(".category");

const urlRestaurant = "http://localhost:3000/restaurant";

// clear user Input on unfocus 
userName.addEventListener('mouseup', () =>{
  ulElement.innerHTML = "";
})

// send data to server and get user information
function sendData(e) {
  fetch("restaurant/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ payload: e.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      let payload = data.payload;
      ulElement.innerHTML = "";
      if (userName.value.trim().length == 0) {
        ulElement.innerHTML = "";
        return;
      }
      if (payload.length < 1) {
        ulElement.innerHTML =
          '<li class="list-group-item">Không tìm thấy kết quả nào</li>';
        return;
      } else {
        payload.forEach((item, index) => {
          if (index > 0) {
            ulElement.innerHTML += `<li class="list-group-item">${item.userName}</li>`;
          }
        });
        const item = document.querySelectorAll(".list-group-item");
        item.forEach(function (item, index) {
          item.addEventListener("click", function (e) {
            userName.value = e.target.textContent;
            ulElement.innerHTML = "";
          });
        });
        return;
      }
    });
}
//logic add tags --Start--
const ul = document.querySelector(".ul-category"),
  input = document.querySelector(".category"),
  tagNumb = document.querySelector(".count-tags");
let maxTags = 3,
  tags = ["Ẩm Thực Việt"];
createTag();
countTags();
function countTags() {
  input.focus();
  tagNumb.innerText = maxTags - tags.length;
}
function createTag() {
  ul.querySelectorAll("li").forEach((li) => li.remove());
  tags
    .slice()
    .reverse()
    .forEach((tag) => {
      let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
      ul.insertAdjacentHTML("afterbegin", liTag);
    });
  countTags();
}
function remove(element, tag) {
  let index = tags.indexOf(tag);
  tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
  element.parentElement.remove();
  countTags();
}
function addTag(e) {
  if (e.key === ",") {
    e.preventDefault(); // Ngăn chặn sự kiện mặc định của phím ","
    let tag = e.target.value.replace(",", "").trim(); // Loại bỏ khoảng trắng thừa
    if (tag.length > 0 && !tags.includes(tag)) {
      // Kiểm tra xem tag có nội dung và chưa tồn tại trong danh sách tags
      if (tags.length < 3) {
        tag.split(",").forEach((tag) => {
          tags.push(tag);
          createTag();
        });
      }
    }
    e.target.value = "";
  }
}
input.addEventListener("keyup", addTag);
//logic add tags --End--

//logic send form submit
function handleAjaxComplete() {
  var toastEl = document.querySelector(".toast");
  var toast = new bootstrap.Toast(toastEl);
  if (toastEl && `<%= msg %>` !== "") {
    toast.show();
  }
}

//clear messages

userName.onfocus = () => {
  showMessage.innerHTML = "";
};
address.onfocus = () => {
  showMessage.innerHTML = "";
};
phoneNumber.onfocus = () => {
  showMessage.innerHTML = "";
};
nameRestaurant.onfocus = () => {
  showMessage.innerHTML = "";
};
description.onfocus = () => {
  showMessage.innerHTML = "";
};
category.onfocus = () => {
  showMessage.innerHTML = "";
};
btnSucsess.addEventListener("click", (e) => {
  function message(msg) {
    showMessage.innerHTML = `<div class="alert alert-danger" role="alert">${msg}</div>`;
    e.preventDefault();
  }
  if (
    userName.value.trim().length == 0 ||
    address.value.trim().length == 0 ||
    phoneNumber.value.trim().length == 0 ||
    nameRestaurant.value.trim().length == 0 ||
    description.value.trim().length == 0 ||
    tags == 0
  ) {
    message("Vui lòng nhập đầy đủ thông tin");
    return;
  } else if (phoneNumber.value.trim() <= 0) {
    message("Số điện thoại phải là số dương");
    return;
  } else if (phoneNumber.value.trim().length < 9) {
    message("Số điện thoại phải lớn hơn 9 kí tự");
    return;
  }
});
formRestaurant.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(this);
  // add tags form data
  Object.keys(tags).forEach(function (key) {
    formData.append("tags[]", tags[key]);
  });
  //send ajax request
  var xhr = new XMLHttpRequest();
  xhr.open("POST", urlRestaurant);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Xử lý phản hồi thành công từ server
      console.log("Send Successfully");
      formRestaurant.reset();
      tags.length = 0;
      ul.querySelectorAll("li").forEach(li => li.remove());
      countTags();
    } else {
      // Xử lý lỗi từ server
      console.log("Send error");
    }
  };
  // xử lý thông báo khi submit
  xhr.addEventListener("load", handleAjaxComplete);
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      handleAjaxComplete();
    }
  });
  xhr.send(formData);
});
