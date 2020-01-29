import React from "react";

import "./TarifCard.css";

export default function TarifCard(props) {
  const { price } = props;
  return (
    <div className='cards'>
      <div
        className='flip-container' /*onClick="this.classList.toggle('hover');"*/
      >
        <div className='flipper'>
          <div
            className='frontT'
            style={{
              backgroundImage: `url(https://icon2.kisspng.com/20180706/kyh/kisspng-euro-sign-currency-symbol-pound-sign-200-euro-5b3fb21505e782.9347909915309010130242.jpg)`
            }}></div>
          <div className='backT'>
            <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
