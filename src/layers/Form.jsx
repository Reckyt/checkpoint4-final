import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <div className='form-container'>
      <h1>CONTACT</h1>
      <form className='form'>
        <div className='form-lign'>
          <label for='lastname'>Nom :</label>
          <input name='lastname' required></input>
        </div>
        <div className='form-lign'>
          <label for='firstname'>Prénom :</label>
          <input name='firstname' required></input>
        </div>
        <div className='form-lign'>
          <label for='email'>Email :</label>
          <input type='email' name='email' required></input>
        </div>
        <div className='form-lign'>
          <label for='text'>Votre message :</label>
          <textarea name='text'></textarea>
        </div>
      </form>
      <button className='button-form'>Envoyer</button>
    </div>
  );
}
