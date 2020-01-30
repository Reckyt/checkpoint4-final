import React from "react";

import "./ArtistCard.css";

export default function ArtistCard(props) {
  const { artists } = props;

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
              <span>
                <b>{artist.lastname}</b>
              </span>
              <span>
                <b>{artist.firstname}</b>
              </span>
              <span>{artist.bio}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
