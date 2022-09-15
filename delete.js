const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function reloadWithNoCache() {
  window.location = window.location.href + "?eraseCache=" + Math.random();
}
function deleteMethod(id) {
  $.ajax({
    url: usersApi + "/" + id,
    type: "DELETE",
    success: function (result) {
      alert("Xóa thành công");
      reloadWithNoCache();
    },
  });
}
function deleteHandle(id) {
  const content = "Bạn có muốn xóa thành viên này không?";
  window.onkeyup = (e) => {
    if (e.which == 27) {
      confirmPopup = true;
    }
  };
  let confirmPopup = confirm(content);
  if (confirmPopup == true) {
    deleteMethod(id);
  }
}
export default deleteHandle;
