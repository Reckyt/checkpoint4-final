import axios from "axios";
import React, { useEffect, useState } from "react";

import "./ArtistCard.css";

export default function ArtistCard() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/artist")
      .then(res => res.data)
      .then(data => setArtists(data));
  }, []);

  return (
    <div className='cards'>
      {artists.map(artist => (
        <div
          className='flip-container'
          ontouchstart="this.classList.toggle('hover');">
          <div className='flipper'>
            <div
              className='front'
              style={{
                backgroundImage: `url(${artist.image})`
              }}></div>
            <div className='back'>
              <span>{artist.lastname}</span>
              <span>{artist.firstname}</span>
              <span>{artist.bio}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
