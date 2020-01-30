import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Show.css";
import ArtistCard from "../components/ArtistCard";

export default function Show() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/artist")
      .then(res => res.data)
      .then(data => setArtists(data));
  }, []);
  return (
    <div className='container-cards'>
      <h1>Nom du psectacle</h1>
      <div>texte de description du spectacle</div>
      <ArtistCard artists={artists} />
    </div>
  );
}
