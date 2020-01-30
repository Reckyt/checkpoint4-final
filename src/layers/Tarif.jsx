import React, { useState } from "react";

import "./Tarif.css";
import TarifCard from "../components/TarifCard";

export default function Tarif() {
  const [ok, setOk] = useState(false);
  const [clik, setClik] = useState(1);

  const finish = () => {
    if (clik === 0) {
      document.getElementById("game").disabled = true;
    }
  };

  return (
    <div className='tarif'>
      <div className={ok === true ? "popup" : "popupf"}>
        Bravo, tu connais maintenant ton prix
        <button className='button-popup' onClick={() => setOk(false)}>
          fermer
        </button>
      </div>

      <div className='infos'>
        <span>le prix de votre ticket sera celui de votre chance,</span>
        <span>
          retournez une carte et découvrez si vous avez le cul bordé de nouilles
        </span>
      </div>

      <div className='container-price'>
        <TarifCard
          price={"gratuit"}
          ok={ok}
          setOk={setOk}
          onClick={(() => finish(), () => setClik(0))}
        />
        <TarifCard price={"1000€"} ok={ok} setOk={setOk} />
        <TarifCard price={"500€"} ok={ok} setOk={setOk} />
        <TarifCard price={"bannie du cirque"} ok={ok} setOk={setOk} />
      </div>
    </div>
  );
}
