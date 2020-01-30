import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./ShowCard.css";

function ShowCard(props) {
  const { shows } = props;

  return (
    <div className='container-show-card'>
      {shows &&
        shows.map(show => (
          <div>
            <Link to={`/show/${show.id}`}>
              <div
                className='show-card'
                style={{
                  backgroundImage: `url(${show.picture})`
                }}></div>
            </Link>
            <div className='freak'>
              <h2 className='show-title'>{show.title}</h2>
              <p className='show-description'>{show.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

const mapStateToProps = state => ({
  shows: state.shows
});

export default connect(mapStateToProps)(ShowCard);
