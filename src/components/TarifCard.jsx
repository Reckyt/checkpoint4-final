import axios from "axios";
import React, { useState } from "react";

import "./TarifCard.css";

export default function TarifCard(props) {
  const { price, ok, setOk } = props;
  const [prix, setPrix] = useState("");

  const handleClick = () => {
    setPrix({ price });
    console.log("ok");
    axios.post("http://localhost:3000/api/command/price", { price });
  };

  return (
    <div className='contain-checkbox'>
      <label className='lala'>
        <input className='input-card' type='checkbox' />
        <div className='card' onClick={() => setOk(true)}>
          <div className='frontT' onClick={() => handleClick()} />
          <div className='backT'>{price}</div>
        </div>
      </label>
    </div>
  );
}
