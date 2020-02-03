import React, { useEffect, useState } from "react";
import axios from "axios";

import ArtistCard from "../../components/ArtistCard";

import "./SeeArtist.css";

export default function SeeArtist() {
  const [artist, setArtist] = useState([]);
  const [admin] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/artists")
      .then(res => res.data)
      .then(data => setArtist(data));
  }, [artist]);

  return (
    <div className='container-artist'>
      <ArtistCard artists={artist} admin={admin} setArtist={setArtist} />
    </div>
  );
}
