import axios from "axios";
import React, { useState } from "react";

import "./TarifCard.css";

export default function TarifCard(props) {
  const [prix, setPrix] = useState("");
  const [ok, setOk] = useState(false);

  const handleClick = () => {
    setOk(true);
    setPrix({ price });
    console.log(price);
    console.log(ok);

    axios
      .post("http://localhost:3000/api/command/price", { price })
      .then(ok === true && <div className='popup'>blabla coute {price}</div>);
  };

  const { price } = props;
  return (
    <div className='contain-checkbox'>
      <label className='lala'>
        <input className='input-card' type='checkbox' />
        <div className='card'>
          <div className='frontT' onClick={() => handleClick()} />
          <div className='backT'>{price}</div>
        </div>
      </label>
    </div>
  );
}
