import "../Styles/Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helper } from "../Helpers/localStorageHelper";
function Menu({ dataForMenu }) {
  const [currentPage, setPage] = useState(location.pathname);
  const user = Helper.GetDataFromLocalStorage(Helper.loggedInUserKey);
  const userShow = user ? user.email : "";
  return (
    <div className="topnav">
      {dataForMenu.map((t, index) => (
        <Link
          onClick={() => setPage(t.linkTo)}
          key={index}
          style={{ margin: 5 }}
          to={t.linkTo}
          className={currentPage == t.linkTo ? "active" : ""}
        >
          {t.icon}
          {t.displayName}
        </Link>
      ))}
      <div
        className={user ? "welcome" : ""}
        style={{ position: "absolute", right: 20 }}
      >
        <div hidden={user ? false : true}>Welcome </div>
        <div className={user ? "User" : ""}>{userShow}</div>
      </div>
    </div>
  );
}
export { Menu };
