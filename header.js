const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let listItem = $$(".item");

function clickItemHandle() {
 listItem.forEach((item) => {
    item.onclick = () => {
        $(".active").classList.remove("active");
        item.classList.add("active");
    };
 })
}
export default clickItemHandle;