const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

import clickItemHandle from './header.js';
clickItemHandle();
const usersApi = "https://631c255e4fa7d3264ca7c5ca.mockapi.io/api/users";
function start() {
    renderUsers();
}
function renderUsers() {
    $.ajax({
        type: 'GET',
          dataType:"jsonp",
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        headers:{         
            'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBWZXIiOiIwLjAuMCIsImV4cCI6NDcyNjM4OTEyMiwibG9jYWxlIjoiIiwibWFzdGVyVmVyIjoiIiwicGxhdGZvcm0iOiIiLCJwbGF0Zm9ybVZlciI6IiIsInVzZXJJZCI6IiJ9.QIZbmB5_9Xlap_gDhjETfMI6EAmR15yBtIQkWFWJkrg',
            
        },
        success: function (data, status, xhr) {
            
        }
      });
};
function getUsersHandle(data) {
    let html;
    
}
