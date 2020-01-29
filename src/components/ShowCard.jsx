import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./ShowCard.css";

function ShowCard(props) {
  const { shows } = props;

  // const handleClick = show => {
  //   for (let i = 1; i < shows.length; i++) {
  //     if (show.id === i) {
  //       props.history.push(`/show/${show.id}`);
  //     }
  //   }
  // };

  return (
    <div className='container-show-card'>
      {shows.map(show => (
        <div>
          <Link to='/show' /*onClick={() => handleClick(show)}*/>
            <div
              className='show-card'
              style={{
                backgroundImage: `url(${show.image})`
              }}></div>
          </Link>
          <h2 className='show-title'>{show.title}</h2>
          <p className='show-description'>{show.description}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  shows: state.shows
});

export default connect(mapStateToProps)(ShowCard);
