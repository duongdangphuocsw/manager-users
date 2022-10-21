import renderUser from "./renderUser.js";
const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function reloadWithNoCache() {
  window.location = window.location.href + "?eraseCache=" + Math.random();
}
function handleEditUser(id) {
  let userEditElement = document.getElementById(`userId_${id}`);
  let indexUser = userEditElement.querySelector(".indexUser");
  let nameEditElement = userEditElement.querySelector(".nameUser");
  let emailEditElement = userEditElement.querySelector(".emailUser");
  let groupEditElement = userEditElement.querySelector(".groupUser");
  let statusEditElement = userEditElement.querySelector(".statusUser");
  let html = "";
  html = `
  <td class="indexUser">${indexUser.textContent}</td>
  <td class="userName">
  <input value="${nameEditElement.textContent}" name="nameEdit"></input>
  </td>
  <td class="emailUser">  
  <input value="${emailEditElement.textContent}" name="emailEdit"></input>
  </td>
  <td class="groupUser">  
  <select id="group" name="groupEdit" required >
  <option value="Admin">Admin</option>
  <option value="Editor">Editor</option>
  <option value="Reviewer">Reviewer</option>
</select>
  </td>
  <td class="">
  <select id="status" name="statusEdit" required>
    <option value="Đang hoạt động">Đang hoạt động</option>
    <option value="Tạm khóa">Tạm khóa</option>
    </select>
  </td>
  <td class="control">
    <i class="fa-solid fa-check checkBtn"
    ></i>
    <i class="fa-solid fa-trash" style="color: black;margin: 0 10px 10px" ></i>
    <i class="fa-solid fa-user-check activeBtn" ></i></td>
  `;
  userEditElement.innerHTML = html;
  let btnCheckElement = userEditElement.querySelector(".checkBtn");
  btnCheckElement.onclick = () => {
    console.log(">>> check btn");
    let name = userEditElement.querySelector('input[name="nameEdit"]'),
      email = userEditElement.querySelector('input[name="emailEdit"]'),
      group = userEditElement.querySelector('select[name="groupEdit"]'),
      status = userEditElement.querySelector('select[name="statusEdit"]');
    let dataEdit = {
      name: name.value,
      email: email.value,
      group_role: group.value,
      is_Active: status.value === "Đang hoạt động" ? true : false,
    };
    editMethod(id, dataEdit);
  };
}
function editMethod(id, data) {
  $.ajax({
    url: usersApi + "/" + id,
    type: "PUT",
    data: {
      name: data.name,
      email: data.email,
      group_role: data.group_role,
      is_Active: data.isActive,
    },
    success: function () {
      renderUser();
    },
  });
}
export default handleEditUser;
