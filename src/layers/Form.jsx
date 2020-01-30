import React, { Component } from "react";
import * as emailjs from "emailjs-com";

import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      lastname: "",
      firstname: "",
      email: "",
      message: ""
    };
  }

  handleSubmit = e => {
    console.log("toto");
    e.preventDefault();
    const { lastname, email, message, firstname } = this.state;
    let templateParams = {
      from_name: email,
      to_name: lastname,
      message_html: message,
      firstname: firstname
    };
    emailjs.send(
      "gmail",
      "template_2XUTzGnr",
      templateParams,
      "user_hZy9vQaFGJc8F29KMKQyz"
    );
    this.resetForm();
  };

  resetForm() {
    this.setState({
      lastname: "",
      firstname: "",
      email: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div className='form-container'>
        <h1>CONTACT</h1>
        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='form-lign'>
            <label for='lastname'>Nom :</label>
            <input
              name='lastname'
              value={this.state.lastname}
              onChange={this.handleChange.bind(this, "lastname")}
              required></input>
          </div>

          <div className='form-lign'>
            <label for='firstname'>Prénom :</label>
            <input
              name='firstname'
              value={this.state.firstname}
              onChange={this.handleChange.bind(this, "firstname")}
              required></input>
          </div>

          <div className='form-lign'>
            <label for='email'>Email :</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              required></input>
          </div>

          <div className='form-lign'>
            <label for='text'>Votre message :</label>
            <textarea
              name='text'
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}></textarea>
          </div>

          <button
            className='button-form'
            type='submit'
            onClick={() => this.handleSubmit.bind(this)}>
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
