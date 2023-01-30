import React from "react";
import { toast } from "react-toastify";
import { messages } from "../Helpers/Constants";
import "react-toastify/dist/ReactToastify.css";
export default function SignOutUser() {
  localStorage.removeItem("user");
  toast.success(messages.signout);
  setTimeout(() => {
    location.pathname = "/home";
  }, 1800);

  return <div></div>;
}
