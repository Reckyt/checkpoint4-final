import React, { useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";

import "./Reservation.css";

export default function Reservation() {
  const [date, setDate] = useState(new Date());

  const onChange = date => setDate(date);

  const handleDate = () => {
    axios.post("http://localhost:3000/api/command/date", { date: date });
    console.log(date);
  };

  return (
    <div className='resa'>
      <div className='calendar-notice'>
        Choisissez votre date parmie celle disponible
      </div>
      <Calendar className='calendar' onChange={onChange} value={date} />
      <button className='resa-btn' onClick={() => handleDate()}>
        Validez
      </button>
    </div>
  );
}

// export default function Reservation() {
//   return (
//     <div className='resa'>
//       <div id='stripped'>
//         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1500 1062'>
//           <polyline points='0,154 131,0 0,348 269,0 0,562 437,0 0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830' />
//         </svg>
//       </div>
//     </div>
//   );
// }
