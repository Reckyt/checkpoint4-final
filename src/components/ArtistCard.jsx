import React from "react";

import "./ArtistCard.css";

export default function ArtistCard() {
  return (
    <div>
      <h1>Nom du psectacle</h1>
      <div>texte de description du spectacle</div>
      <div
        className='flip-container'
        ontouchstart="this.classList.toggle('hover');">
        <div className='flipper'>
          <div
            className='front'
            style={{
              backgroundImage: `url(
              https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1muIVsGyPYdXdVCbhPQmK58sbtxecaU7x6EesTddLpses8MuKg&s
            )`
            }}></div>
          <div className='back'>
            <span>nom</span>
            <span>prénom</span>
            <span>
              petite bio qui raconte d'ou vient cet artiste et qui ba gitru zzdj
              petite bio qui raconte d'ou vient cet artiste petite bio qui
              raconte d'ou vient cet artiste
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
