function renderUsers() {
  $.get(
    "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users",
    function (data) {
      getUsersHandle(data);
    }
  );
}
function handleActive(user) {
  if (user.is_active === true) return "Đang hoạt động";
  else return "Tạm khoá";
}
function getUsersHandle(data) {
  let html;
  let tableElement = document.querySelector(".tableBox tbody");
  html = data.map(function (user) {
    let activeContent = handleActive(user);
    return `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.id}</td>
            <td>${activeContent}</td>
            <td>
            <i class="fa-solid fa-pen"></i>
            <i class="fa-solid fa-trash" onclick="deleteHandle(${user.id})"></i>
            <i class="fa-solid fa-user-check"></i></td>
        </tr>
    `;
  });
  tableElement.innerHTML = html.join("");
}

export default renderUsers;
