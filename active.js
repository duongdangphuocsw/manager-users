function updateStatus(id, check) {
  $.ajax({
    type: "PUT",
    url: "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users" + "/" + id,
    data: { is_active: check },
    success: function (data) {
      //console.log(data);
    },
  });
}
export default updateStatus;
