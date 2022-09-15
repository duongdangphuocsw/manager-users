const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
import clickItemHandle from './header.js';
import renderUsers from './renderUser.js';
import deleteHandle from './delete.js';

clickItemHandle();
const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function start() {
    renderUsers();
}
start();
window.deleteHandle = deleteHandle;



