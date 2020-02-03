import axios from "axios";
import React, { useEffect, useState } from "react";

import "./ArtistCard.css";

export default function ArtistCard(props) {
  const { artists, admin, setArtist } = props;

  const [reload, setReload] = useState(0);

  const title = artists.map(x => x.title);
  const description = artists.map(x => x.description);

  const retrieveEvents = () => {
    axios
      .get(`http://localhost:3000/api/events`)
      .then(res => res.data)
      .then(data => setArtist(data));
  };

  useEffect(() => {
    retrieveEvents();
  }, [reload]);

  const deleteCard = artist => {
    axios
      .delete(`http://localhost:3000/api/artists/${artist.id}`)
      .then(res => console.log("ok c'est supprimer"))
      .finally(setReload(reload + 1));

    retrieveEvents();
  };

  return (
    <div>
      <div className='container-header'>
        <div className='header'>
          <div>{description[0]}</div>
          <h1>{title[0]}</h1>
        </div>
      </div>
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
                <span>
                  <b>{artist.lastname}</b>
                </span>
                <span>
                  <b>{artist.firstname}</b>
                </span>
                <span>{artist.bio}</span>
                <div
                  className={admin ? "suppr" : ""}
                  onClick={() => deleteCard(artist)}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
