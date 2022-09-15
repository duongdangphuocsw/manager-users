const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
import renderUsers from "./renderUser";
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
        confirm('Bạn có muốn xoá thành viên này không?');
    })
}
deleteHandle() 
.then((id) => {
    let content = 'Bạn có muốn xóa thành viên này không?';
    // if(confirm(content) == true) {
    //       $.ajax({
    //     url: usersApi + '/' + id,
    //     type: 'DELETE',
    //     success: function(result) {
    //         alert('Xóa thành công');
    //         //renderUsers();
    //     }
    // });
    // }
})
export default deleteHandle;