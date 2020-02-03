import React, { useState } from "react";

import "./Tarif.css";
import TarifCard from "../components/TarifCard";

export default function Tarif() {
  const [popUp, setPopUp] = useState(false);
  const [bloc, setBloc] = useState(false);
  const [click, setClick] = useState(1);

  const handleClick = () => {
    console.log("ok", click);
    if (click === 1) {
      console.log("u", click);
      setPopUp(true);
      setBloc(true);
      setClick(0);
    } else {
      setPopUp(false);
    }
  };

  return (
    <div className='tarif'>
      <div className={popUp ? "popup" : "popupf"}>
        Bravo, tu connais maintenant ton prix
        <button className='button-popup' onClick={() => setPopUp(false)}>
          fermer
        </button>
      </div>

      <div className='infos'>
        <span>le prix de votre ticket sera celui de votre chance,</span>
        <span>
          retournez une carte et découvrez si vous avez le cul bordé de nouilles
        </span>
      </div>
      <div className={bloc ? "block" : "blockf"}></div>

      <div className='container-price'>
        <TarifCard price={"gratuit"} handlePopUp={handleClick} click={click} />
        <TarifCard price={"1000€"} handlePopUp={handleClick} click={click} />
        <TarifCard price={"500€"} handlePopUp={handleClick} click={click} />
        <TarifCard
          price={"bannie du cirque"}
          handlePopUp={handleClick}
          click={click}
        />
      </div>
    </div>
  );
}
