import React from "react";

import ShowCard from "../components/ShowCard";

import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
      <div className='home-title'>
        <h1>Découvrez nos spectacles</h1>
      </div>
      <ShowCard />
    </div>
  );
}
