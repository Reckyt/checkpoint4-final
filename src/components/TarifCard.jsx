import React from "react";

import "./TarifCard.css";

export default function TarifCard(props) {
  const { price } = props;
  return (
    <div className='contain-checkbox'>
      <label className='lala'>
        <input className='input-card' type='checkbox' />
        <div className='card'>
          <div className='frontT' />
          <div className='backT'>{price}</div>
        </div>
      </label>
    </div>

    // <div className='cards'>
    //   <div
    //     className='flip-container' /*onClick="this.classList.toggle('hover');"*/
    //   >
    //     <div className='flipper'>
    //       <div className='frontT'></div>
    //       <div className='backT'>
    //         <div className='pripri'>{price}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
