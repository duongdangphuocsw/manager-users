//const $ = document.querySelector.bind(document);
//const $$ = document.querySelectorAll.bind(document);
import clickItemHandle from "./header.js";
import renderUsers from "./renderUser.js";
import deleteHandle from "./delete.js";
import updateStatus from "./active.js";
import handleEditUser from './edit.js';
window.deleteHandle = deleteHandle;
window.activeUser = activeUser;
window.handleEditUser = handleEditUser;
clickItemHandle();
const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function start() {
  renderUsers();
}
start();
function reloadWithNoCache() {
  window.location = window.location.href + "?eraseCache=" + Math.random();
}

// Handle Update Status
function activeUser(activeId) {
  let activeElement = document.getElementsByClassName(`activeId_${activeId}`);
  if (activeElement[0].textContent === "Đang hoạt động") {
    window.onkeyup = (e) => {
      if (e.which == 27) {
        confirmPopup = true;
      }
    };
    let confirmPopup = confirm("Bạn có muốn khoá người này không?");
    if (confirmPopup == true) {
      activeElement[0].textContent = "Tạm khoá";
      activeElement[0].classList.remove("userActive");
      activeElement[0].classList.add("userNotActive");
      
      updateStatus(activeId, "false");
    }
  } else {
    window.onkeyup = (e) => {
      if (e.which == 27) {
        confirmPopup = true;
      }
    };
    let confirmPopup = confirm("Bạn có muốn mở khoá người này không?");
    if (confirmPopup == true) {
      activeElement[0].textContent = "Đang hoạt động";
      activeElement[0].classList.add("userActive");
      activeElement[0].classList.remove("userNotActive");
      updateStatus(activeId, "true");
    }
  }
}
// Handle Add User
function addUserHandle() {
  let nameInputElement = document.getElementById("nameInput");
  let emailInputElement = document.getElementById("emailInput");
  let sellectGroupInput = document.getElementById("group");
  let sellectStatusInput = document.getElementById("status");
  if (
    nameInputElement.value === "" ||
    emailInputElement.value === "" ||
    sellectGroupInput.value === "Chọn nhóm" ||
    sellectStatusInput.value === "Chọn trạng thái"
  ) {
    alert("Please fill all field...");
  } else {
    $.ajax({
      type: "POST",
      url: usersApi,
      data: {
        name: nameInputElement.value,
        email: emailInputElement.value,
        group_role: sellectGroupInput.value,
        is_active: sellectStatusInput.value === "Đang hoạt động" ? true : false,
      },
      success: () => {
        alert("Added user succesfull!");
        reloadWithNoCache();
      },
      dataType: "html",
    });
  }
}
// Handle Button Add User onClick
let btnAddElement = document.querySelector(".btnAdd");
btnAddElement.onclick = () => {
  addUserHandle();
};
