import clickItemHandle from "./header.js";
import renderUsers from "./renderUser.js";
import deleteHandle from "./delete.js";
import updateStatus from "./active.js";
import handleEditUser from "./edit.js";
import handleFindUser from "./findUser.js";
import { getUsersHandle, dataUsers } from "./renderUser.js";
import panigation from "./panigation.js";
import { getData } from "./renderUser.js";
import {clickToActive, handleNextPage , handlePrevPage} from "./panigation.js";
const btnAddElement = document.querySelector(".btnAdd");
const findBtn = document.querySelector(".btnFind");
const stopFindBtn = document.querySelector(".btnDelete");
const nameInputElement = document.getElementById("nameInput");
const emailInputElement = document.getElementById("emailInput");
const sellectGroupInput = document.getElementById("group");
const sellectStatusInput = document.getElementById("status");
window.deleteHandle = deleteHandle;
window.activeUser = activeUser;
window.handleEditUser = handleEditUser;
window.clickToActive = clickToActive;
window.handleNextPage = handleNextPage;
window.handlePrevPage = handlePrevPage;
clickItemHandle();
const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function start() {
  renderUsers();
  handleEvent();
  getData(panigation);
}
function testCallBack(data) {
  console.log(">> check data by call back: " , data);
}
function getDataInput() {
  return {
    name: nameInputElement.value,
    email: emailInputElement.value,
    group_role: sellectGroupInput.value,
    is_active: sellectStatusInput.value === "Đang hoạt động" ? true : false,
  };
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
        $.ajaxSetup({
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
        });
        renderUsers();
        nameInputElement.value = "";
        emailInputElement.value = "";
        sellectGroupInput.value = "Chọn nhóm";
        sellectStatusInput.value = "Chọn trạng thái";
        getData(panigation);
      },
      dataType: "html",
    });
  }
}
function handleEvent() {
  // handle add user
  btnAddElement.onclick = (event) => {
    event.preventDefault();
    addUserHandle();
  };
  // handle find user
  findBtn.onclick = (event) => {
    event.preventDefault();
    let dataFind = getDataInput();
    dataFind.group_role =
      sellectGroupInput.value === "Chọn nhóm"
        ? "none"
        : sellectGroupInput.value;
    dataFind.is_active =
      sellectStatusInput.value === "Chọn trạng thái"
        ? "none"
        : dataFind.is_active;
    handleFindUser(dataFind);
  };
  // handle stop find
  stopFindBtn.onclick = (event) => {
    event.preventDefault();
    //getUsersHandle(dataUsers);
    getData(panigation)
    nameInputElement.value = "";
    emailInputElement.value = "";
    sellectGroupInput.value = "Chọn nhóm";
    sellectStatusInput.value = "Chọn trạng thái";
  };
}
start();
export { start };
