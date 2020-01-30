import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Show.css";
import ArtistCard from "../components/ArtistCard";

export default function Show(props) {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/artist/${props.match.params.id}`)
      .then(res => res.data)
      .then(data => setArtists(data));
  }, [""]);

  return (
    <div className='container-cards'>
      <ArtistCard artists={artists} />
    </div>
  );
}
