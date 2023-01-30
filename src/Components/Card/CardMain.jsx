import React from "react";

import { Helper } from "../../Helpers/localStorageHelper";

import "./card.css";
import { messages } from "../../Helpers/Constants";

export default function CardMain(props) {
  const card = props.card;
  const index = props.index;

  const handleToremove = () => {
    if (Helper.GetDataFromLocalStorage(Helper.cardsKey).length !== "") {
      if (window.confirm(messages.cardRemoving)) {
        Helper.RemoveCard(index);
        location.pathname = "/mytabs";
      }
    }
  };
  //

  //

  return (
    <div className="business2">
      <div className="front">
        <div className="blue">
          <div className="head">
            <div>
              <h2>Business Card</h2>
              <p className="scroll-text">your business card</p>
            </div>
          </div>
        </div>
        <div className="avatar">
          <div className="img">
            <img src={card.BusinessImage} alt="" />
          </div>
          <p>{card.BusinessName}</p>
          <p>Information</p>
        </div>
        <div className="infos">
          <p style={{ fontWeight: "bold" }}>Business Description :</p>
          <p>{card.BusinessDesc}</p>
          <p style={{ fontWeight: "bold" }}>Business Address :</p>
          <p>{card.BusinessAddress}</p>
          <p style={{ fontWeight: "bold" }}>Business Phone :</p>
          <p>{card.BusinessPhone}</p>
          <div className="bton" style={{ padding: 5 }}>
            <button
              style={{ left: 62, position: "absolute", bottom: 15 }}
              className="btn"
              onClick={handleToremove}
            >
              Remove this Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
