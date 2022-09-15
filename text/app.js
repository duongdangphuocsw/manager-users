function deleteHandle(id) {
  // $.ajax({
  //     url: usersApi + '/' + id,
  //     type: 'DELETE',
  //     success: function(result) {
  //         // Do something with the result
  //     }
  // });
  //confirm('Bạn có muốn xoá thành viên này không?');
  return new Promise((resole, reject) => {
    resole(id);
    //confirm("Bạn có muốn xoá thành viên này không?");
  });
}
deleteHandle().then((id) => {
  confirm("Bạn có muốn xoá thành viên này không?");
});
