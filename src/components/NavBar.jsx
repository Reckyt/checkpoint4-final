import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='navBar-title'>Wild Circus</div>
      <Link to='/log' className='contain-icon'>
        <div className='admin'></div>
      </Link>
      <div className='navBar-link'>
        <div className='link'>
          <Link to='/' className='noDeco'>
            Accueil
          </Link>
        </div>
        <div className='link'>
          <Link to='/reservation' className='noDeco'>
            Réservations
          </Link>
        </div>
        <div className='link'>
          <Link to='/tarif' className='noDeco'>
            Tarifs
          </Link>
        </div>
        <div className='link'>
          <Link to='/contact' className='noDeco'>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
