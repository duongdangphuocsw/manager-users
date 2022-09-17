function renderUsers() {
  $.get(
    "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users",
    function (data) {
      getUsersHandle(data);
    }
  );
}
function handleActive(user) {
  if (user.is_active == 'true') return "Đang hoạt động";
  else return "Tạm khoá";
}
function getUsersHandle(data) {
  let html;
  let tableElement = document.querySelector(".tableBox tbody");
  html = data.map(function (user,index) {
    let activeContent = handleActive(user);
    let isActiveToSetName;
    if(user.is_active == 'true') {
      isActiveToSetName = 'userActive';
    }
    else {
      isActiveToSetName = 'userNotActive';
    }
    return `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.group_role}</td>
            <td class="activeId_${user.id} ${isActiveToSetName}">${activeContent}</td>
            <td class="control">
            <i class="fa-solid fa-pen editBtn"></i>
            <i class="fa-solid fa-trash deleteBtn" onclick="deleteHandle(${user.id})"></i>
            <i class="fa-solid fa-user-check activeBtn" onclick="activeUser(${user.id})"></i></td>
        </tr>
    `;
  });
  tableElement.innerHTML = html.join("");
}
export default renderUsers;
