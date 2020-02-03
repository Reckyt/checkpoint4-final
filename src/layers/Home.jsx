import React from "react";

import ShowCard from "../components/ShowCard";

import "./Home.css";

export default function Home(props) {
  return (
    <div className='home'>
      <div className='home-title'>
        <p>Découvrez nos spectacles</p>
      </div>
      <ShowCard props={props} />
    </div>
  );
}
