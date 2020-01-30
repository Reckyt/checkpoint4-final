import axios from "axios";
import React, { useState } from "react";

import "./TarifCard.css";

export default function TarifCard(props) {
  const { price, handlePopUp, click } = props;
  const [prix, setPrix] = useState("");

  const handleClick = () => {
    setPrix({ price });
    axios.post("http://localhost:3000/api/command/price", { price });
  };

  return (
    <div id='game' className='contain-checkbox'>
      <label className='lala'>
        <input className='input-card' selected='selected' type='checkbox' />
        <div className="card" onClick={handlePopUp}>
          <div className='frontT' onClick={() => handleClick()} />
          <div className='backT'>{price}</div>
        </div>
      </label>
    </div>
  );
}
