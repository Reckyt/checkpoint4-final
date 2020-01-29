import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

export default function Contact() {
  return (
    <div className='contact'>
      <h1>
        <b className='mail'>WILD-CIRCUS@GMAIL.COM</b>
      </h1>
      <h3 className='adress'>
        9 allée Serr, 33100 BORDEAUX - TEL : 06 66 96 17 77
      </h3>
      <Link to='/form'>
        <button className='button-contact'>Nous contactez directement</button>
      </Link>
    </div>
  );
}
