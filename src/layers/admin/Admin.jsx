import React from "react";
import { Link } from "react-router-dom";

import "./Admin.css";

export default function Admin() {
  return (
    <div className='dashbord'>
      <div className='onglet'>
        <Link className='liendemerde' to='/see-artist'>
          Voir tous les artistes
        </Link>
      </div>

      <div className='onglet'>
        <Link className='liendemerde' to='/add-artist'>
          Ajouter un artiste
        </Link>
      </div>
    </div>
  );
}
