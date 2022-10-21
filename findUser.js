import { dataUsers, getUsersHandle } from "./renderUser.js";
import panigation from "./panigation.js";
import { currentPage } from "./panigation.js";
function handleFindUser(dataFind) {
  let dataFilter = dataUsers.filter((item) => {
    return (
      item.name.toLowerCase().includes(dataFind.name.toLowerCase()) &&
      (dataFind.email === "" ? true : item.email === dataFind.email) &&
      (dataFind.group_role === "none"
        ? true
        : item.group_role === dataFind.group_role) &&
      (dataFind.is_active === "none"
        ? true
        : item.is_active == dataFind.is_active.toString())
    );
  });
  //getUsersHandle(dataFilter);
  panigation(dataFilter, 1);
}
export default handleFindUser;
