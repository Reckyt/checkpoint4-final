import React from "react";
import { Link } from "react-router-dom";

import "./ShowCard.css";

export default function ShowCard() {
  return (
    <div className='container-show-card'>
      <Link to='/artist'>
        <div
          className='show-card'
          style={{
            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96ifhcCAJIh_N9paPu0OyBu9_keZKvM1VNvWK0qmo0jkU4z2KRQ&s)`
          }}></div>
      </Link>
      <h2>nom du spectacle</h2>
      <p>description du spectacle</p>
    </div>
  );
}
