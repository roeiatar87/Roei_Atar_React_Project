import React from "react";
import { useState } from "react";
import CardMain from "../Components/Card/CardMain";
import { Helper } from "../Helpers/localStorageHelper";
import BusinessCardPage from "./BusinessCardPage";

import "../Styles/MyTabs.css";

export default function MyTabs() {
  const [CardsShow, setCards] = useState(true);
  const [bussFields, setbuss] = useState(false);
  const user = Helper.GetDataFromLocalStorage(Helper.loggedInUserKey);
  const registeredCards = Helper.GetDataFromLocalStorage(Helper.cardsKey);
  const Mycards = registeredCards.filter((card) => card.userid == user.userid);

  return (
    <>
      <div>
        <button
          className="btn"
          style={{ marginTop: 20 }}
          onClick={() => (setbuss(true), setCards(false))}
        >
          Create New Card
        </button>
        {CardsShow && (
          <fieldset className="tabs">
            <legend className="leg">My business cards</legend>
            <div className="business2">
              {Mycards.map((card, index) => (
                <div key={index}>
                  <CardMain card={card} index={index}></CardMain>
                </div>
              ))}
            </div>
          </fieldset>
        )}
        <div>{bussFields && <BusinessCardPage />}</div>
      </div>
    </>
  );
}
