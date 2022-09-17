//const $ = document.querySelector.bind(document);
//const $$ = document.querySelectorAll.bind(document);
import clickItemHandle from "./header.js";
import renderUsers from "./renderUser.js";
import deleteHandle from "./delete.js";
import updateStatus from "./active.js";
clickItemHandle();
const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function start() {
  renderUsers();
}
start();
function reloadWithNoCache() {
  window.location = window.location.href + "?eraseCache=" + Math.random();
}
window.deleteHandle = deleteHandle;
window.activeUser = activeUser;
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
      updateStatus(activeId, "true");
    }
  }
}
// Get data from input
function getDataFromInput() {
  let nameInputElement = document.getElementById("nameInput");
  let emailInputElement = document.getElementById("emailInput");
  let sellectGroupInput = document.getElementById("group");
  let sellectStatusInput = document.getElementById("status");
  let nameData, emailData, groupData, statusData;
  nameInputElement.onchange = (event) => {
    //console.log(event.target.value);
    nameData = event.target.value;
    console.log(nameData);
  };
  emailInputElement.onchange = (event) => {
    //console.log(event.target.value);
  };
  //console.log(nameInputElement);
  //console.log(emailInputElement);
  //   console.log(sellectGroupInput);
  //   console.log(sellectStatusInput.value);
  //console.log(nameData);
  return {
    name: nameInputElement.value,
    email: emailInputElement.value,
    group: sellectGroupInput.value,
    status: sellectStatusInput.value,
  };
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
        reloadWithNoCache();
        alert("Added user succesfull!");
      },
      dataType: "html",
    });
  }
}
let btnAddElement = document.querySelector(".btnAdd");
btnAddElement.onclick = () => {
  addUserHandle();
};
