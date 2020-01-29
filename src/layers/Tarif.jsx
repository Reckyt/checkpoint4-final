import React from "react";

import "./Tarif.css";
import TarifCard from "../components/TarifCard";

export default function Tarif() {
  return (
    <div>
      <div className='infos'>
        <span>le prix de votre ticket sera celui de votre chance,</span>
        <span>
          retournez une carte et découvrez si vous avez le cul bordé de nouilles
        </span>
      </div>
      <div className='container-price'>
        <TarifCard price={"gratuit"} />
        <TarifCard price={"1000€"} />
        <TarifCard price={"500€"} />
        <TarifCard price={"bannie du cirque"} />
      </div>
    </div>
  );
}
