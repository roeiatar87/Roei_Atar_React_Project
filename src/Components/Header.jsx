import React from "react";
import { Helper } from "../Helpers/localStorageHelper";
import { Menu } from "./Menu";
import {
  MenuForBusiness,
  MenuForGuest,
  MenuForRegular,
} from "../Helpers/MenuData";

export default function Header() {
  const user = Helper.GetDataFromLocalStorage(Helper.loggedInUserKey);
  const menuToShow = user
    ? user.Category == "Simple"
      ? MenuForRegular
      : MenuForBusiness
    : MenuForGuest;

  return (
    <>
      <Menu dataForMenu={menuToShow}></Menu>
    </>
  );
}
