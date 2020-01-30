import React from "react";

import "./ArtistCard.css";

export default function ArtistCard(props) {
  const { artists } = props;

  const title = artists.map(x => x.title);
  const description = artists.map(x => x.description);

  return (
    <div>
      <div className='header'>
        <div>{description[0]}</div>
        <h1>{title[0]}</h1>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
