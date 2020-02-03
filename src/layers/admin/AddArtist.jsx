import React, { useState } from "react";
import axios from "axios";
// import ImageUploader from "react-images-upload";

import "./AddArtist.css";

export default function AddArtist() {
  const [addArtist, setAddArtist] = useState([]);

  const handleChange = event => {
    setAddArtist({ ...addArtist, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`/api/artists`, addArtist);
  };

  return (
    <div className='container-artist-form'>
      <h1 className='title-artist'>Ajouter un nouvel artiste</h1>
      <form className='artist-form'>
        <div className='artist-form'>
          <input
            type='text'
            name='lastname'
            onChange={handleChange}
            placeholder='Nom'
          />
          <input
            type='text'
            name='firstname'
            onChange={handleChange}
            placeholder='Prénom'
          />

          <select className='option' name='show_id' onChange={handleChange}>
            <option value=''>--choisissez son spectacle--</option>
            <option value='1'>Monstres du web</option>
            <option value='2'>DATA acrobates</option>
            <option value='3'>Reaclown</option>
          </select>

          <textarea
            type='text'
            name='bio'
            onChange={handleChange}
            placeholder="Entrez la biographie de l'artiste"
          />

          <button
            className='button-artist'
            type='submit'
            onClick={e => handleSubmit(e)}>
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}

// e => setShowArtist(e.target.value)

// <ImageUploader
// // name='image'
// withIcon={true}
// buttonText='Choose images'
// onChange={handleChange}
// imgExtension={[".jpg", +".gif", +".png", +".gif"]}
// maxFileSize={5242880}
// />
