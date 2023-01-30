import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { messages } from "../Helpers/Constants";
import { Helper } from "../Helpers/localStorageHelper";

export default function BusinessCardPage(props) {
  const [BusinessName, setName] = useState("");
  const [BusinessDesc, setdescription] = useState("");
  const [BusinessAddress, setAddress] = useState("");
  const [BusinessPhone, setPhone] = useState("");
  const [BusinessImage, setimage] = useState(null);

  const user = Helper.GetDataFromLocalStorage(Helper.loggedInUserKey);

  const userid = user ? user.userid : props.userid;
  const userCard = {
    BusinessName,
    BusinessDesc,
    BusinessAddress,
    BusinessPhone,
    BusinessImage,
  };

  const handleButtonClick = () => {
    BusinessName == "" ||
    BusinessDesc == "" ||
    BusinessAddress == "" ||
    BusinessPhone == ""
      ? toast.info(messages.requiredcardDet)
      : "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (BusinessImage) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const dataUrl = event.target.result;

        const updatedUserCard = {
          ...userCard,
          userid,
          BusinessImage: dataUrl,
        };
        Helper.AddCard(updatedUserCard);
      };
      reader.readAsDataURL(BusinessImage);
    } else {
      // Submit without the BusinessImage data
      const updatedUserCard = {
        ...userCard,
        userid,
      };
      Helper.AddCard(updatedUserCard);
    }
    toast.success(messages.successfullyReg);

    setTimeout(() => {
      location.pathname == "/mytabs"
        ? (location.pathname = "/mytabs")
        : (location.pathname = "/home");
    }, 1800);
  };

  const handleToCancel = () => {
    if (location.pathname == "/businessRegistration") {
      if (window.confirm(messages.cancelRegistration)) {
        Helper.RemoveUser(props.userid);
        location.pathname = "/home";
      }
    } else {
      location.pathname = "/mytabs";
    }
  };

  const handleImageChange = (event) => {
    setimage(event.target.files[0]);
  };
  return (
    <div className="SignUp">
      <form onSubmit={handleSubmit}>
        <h1>Business Card Creation</h1>
        <p>Business Name</p>
        <input
          className="input"
          required="required"
          value={BusinessName}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="Business Name"
          id="BussName"
          placeholder="e.g: Biss name"
        />
        <p>Business Description</p>
        <textarea
          className="input"
          required="required"
          value={BusinessDesc}
          onChange={(e) => setdescription(e.target.value)}
          type="text"
          name="Business Description"
          id="BussDesc"
          placeholder="e.g: Demo text"
        />
        <p>Business Address</p>
        <input
          className="input"
          required="required"
          value={BusinessAddress}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          name="Business Address"
          id="BussAddr"
          placeholder="e.g: Biss Adress"
        />
        <p>Business Phone</p>
        <input
          className="input"
          required="required"
          value={BusinessPhone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="Business Phone"
          id="BussPho"
          placeholder="e.g: 050-1234567"
        />
        <p>Business Image</p>
        <input
          type="file"
          name="Business Image"
          id="BussImg"
          onChange={handleImageChange}
        />
        <br />
        <br />
        <button className="btn" type="submit" onClick={handleButtonClick}>
          {location.pathname == "/mytabs" ? "Create Card" : "Sign Up"}
        </button>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <button className="btn" type="submit" onClick={handleToCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
