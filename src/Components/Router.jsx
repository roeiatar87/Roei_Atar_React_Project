import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import BusinessUserReg from "../Pages/BusinessUserReg";
import HomePage from "../Pages/HomePage";
import SimpleUserReg from "../Pages/SimpleUserReg";
import MyTabs from "../Pages/MyTabs";
import SignInPage from "../Pages/SignInPage";

import BusinessCardPage from "../Pages/BusinessCardPage";
import SignOutUser from "../Pages/SignOutUser";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/businessRegistration" element={<BusinessUserReg />} />
      <Route path="/simpleRegistration" element={<SimpleUserReg />} />
      <Route path="/mytabs" element={<MyTabs />} />
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/businessCardPage" element={<BusinessCardPage />} />
      <Route path="/signout" element={<SignOutUser />} />
    </Routes>
  );
};
export default Router;
