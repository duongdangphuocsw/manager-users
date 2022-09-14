const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function deleteHandle(id) {
    confirm('Bạn có muốn xoá thành viên này không?');
    // $.ajax({
    //     url: usersApi + '/' + id,
    //     type: 'DELETE',
    //     success: function(result) {
    //         // Do something with the result
    //     }
    // });
}
export default deleteHandle;