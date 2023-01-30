import React, { useState } from "react";
import { messages } from "../Helpers/Constants";
import { toast } from "react-toastify";
import { Helper } from "../Helpers/localStorageHelper";

import "react-toastify/dist/ReactToastify.css";
export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleButtonClick = () => {
    email == "" || password == "" ? toast.info(messages.required2fields) : "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    const matchingUser = Helper.ValidateUser(user);

    if (matchingUser) {
      toast.success(messages.successfullyconnected);
      setTimeout(() => {
        location.pathname = "/home";
      }, 1800);
      //Save user under
      Helper.Login(matchingUser);
    } else {
      toast.error(messages.signinfail);
    }
  };
  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <p>Email:</p>
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Enter Email Adress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required="required"
        ></input>
        <p>Password:</p>
        <input
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          name="Password"
          placeholder="Enter Password"
          required="required"
        ></input>
        <br></br>
        <br></br>
        <label>
          <input
            type="checkbox"
            onClick={() => setShowPassword(!showPassword)}
          />
          &nbsp; Show Password
        </label>
        <br></br>
        <br></br>
        <button className="btn" type="submit" onClick={handleButtonClick}>
          Sign In
        </button>
      </form>
    </div>
  );
}
