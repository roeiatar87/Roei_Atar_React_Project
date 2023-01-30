import React, { useState } from "react";
import { messages } from "../Helpers/Constants";
import { toast } from "react-toastify";
import BusinessCardPage from "../Pages/BusinessCardPage";
import { Helper } from "../Helpers/localStorageHelper";
import { UsersModel } from "../Helpers/usersModel";
import "../Styles/SignInOut.css";
export default function SignUp(props) {
  const { Category, TitleName, ButtonName } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //hide fiedlds of signup and business card
  const [SignUpFields, setFields] = useState(true);
  const [bussFields, setbuss] = useState(false);

  const registeredUsers = Helper.GetDataFromLocalStorage(Helper.usersKey);

  const [userid, setuserid] = useState(registeredUsers.length);

  // passwords check
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");

  const handleButtonClick = () => {
    email == "" || password == "" || name == ""
      ? toast.info(messages.required3fields)
      : "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error(messages.errorMatchingPass);
      return;
    }

    const nameCheck = new UsersModel(name);
    const passwordChack = new UsersModel(password);
    if (passwordChack.validatePassword()) {
      if (nameCheck.validateName()) {
        const existingUser = Helper.ExistingUser(email);
        if (existingUser) {
          toast.error(messages.existingUseralert);
          return;
        }
        setuserid(registeredUsers.length);
        const user = { email, password, name, Category, userid };

        Helper.AddUserAccount(user);
        Category == "Simple" ? "" : (setFields(false), setbuss(true));
        props.SignUpAlert();
      }
    }
  };
  return (
    <>
      {SignUpFields && (
        <div className="SignUp">
          <form onSubmit={handleSubmit}>
            <h1>{TitleName}</h1>
            <p>Email :</p>
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              required="required"
              type="email"
              placeholder="Enter Email Adress"
            ></input>
            <p>Password :</p>
            <input
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              required="required"
            ></input>
            <p>Confirm Password :</p>
            <input
              className="input"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required="required"
            ></input>
            <p>Name :</p>
            <input
              className="input"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1)
                )
              }
              type="text"
              placeholder="Enter Name"
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
              {ButtonName}
            </button>
          </form>
        </div>
      )}

      {bussFields && (
        <div>
          <BusinessCardPage email={email} userid={userid} />
        </div>
      )}
    </>
  );
}
