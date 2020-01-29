import React from "react";

import "./Show.css";
import ArtistCard from "../components/ArtistCard";

export default function Show() {
  return (
    <div className='container-cards'>
      <h1>Nom du psectacle</h1>
      <div>texte de description du spectacle</div>
      <ArtistCard />
    </div>
  );
}
