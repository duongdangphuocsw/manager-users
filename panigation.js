import { dataUsers, getData } from "./renderUser.js";
import { getUsersHandle } from "./renderUser.js";
var currentPage = 1;
const per_page = 10;
const listPages = document.querySelector(".list-pages");
let numPageValue = 1;
function panigation(data, page) {
  if(page){
    currentPage = page;
  }
  numPageValue = numPage(data);
  renderPage(data);
  changePage(data , currentPage);
}
function renderPage(data) {
  let htmls = "";
  for (let i = 1; i <= numPageValue; i++) {
    htmls += `<a id="${i}"class="${
      i === currentPage ? "active" : ""
    }" onclick="clickToActive(${i})">${i}</a>`;
  }
  listPages.innerHTML = htmls;
}
function handleNextPage() {
  if (currentPage == numPageValue) {
    currentPage = numPageValue;
  } else {
    currentPage++;
    getData(panigation);
  }
}
function handlePrevPage() {
  if (currentPage == 1) {
    currentPage = 1;
  } else {
    currentPage--;
    getData(panigation);
  }
}
function changePage(data, currentPage) {
  let from = (currentPage - 1) * per_page;
  let to = currentPage * per_page;
  let newData = data.slice(from, to);
  getUsersHandle(newData);
}
function clickToActive(index) {
  currentPage = index;
  renderPage();
  getData(panigation);
}
function numPage(data) {
  return Math.ceil(data.length / per_page);
}
export default panigation;
export { clickToActive, currentPage, handleNextPage, handlePrevPage };
