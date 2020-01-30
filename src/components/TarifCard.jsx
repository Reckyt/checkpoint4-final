import axios from "axios";
import React, { useState } from "react";

import "./TarifCard.css";

export default function TarifCard(props) {
  const [prix, setPrix] = useState("");

  const handleClick = () => {
    setPrix({ price });
    // console.log(price);

    axios.post("http://localhost:3000/api/command/price", prix).then(res => {
      // console.log(prix);
    });
  };

  const { price } = props;
  return (
    <div className='contain-checkbox' onClick={() => handleClick()}>
      <label className='lala'>
        <input className='input-card' type='checkbox' />
        <div className='card'>
          <div className='frontT' />
          <div className='backT'>{price}</div>
        </div>
      </label>
    </div>
  );
}
