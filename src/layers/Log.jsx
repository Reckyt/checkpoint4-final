import React, { Component } from "react";

import "./Log.css";

export default class Log extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    console.log("toto");
    e.preventDefault();
    this.resetForm();
    this.props.history.push(`/admin`);
  };

  resetForm() {
    this.setState({
      email: "",
      password: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div className='contain-admin'>
        <h1 className='title-admin'>Espace administrateur</h1>
        <form className='form-admin' onSubmit={this.handleSubmit.bind(this)}>
          <div className='lign-admin'>
            <label for='email'>Email :</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              required></input>
          </div>

          <div className='lign-admin'>
            <label for='password'>Mot de passe :</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange.bind(this, "password")}
              required></input>
          </div>

          <button
            className='button-admin'
            type='submit'
            onClick={() => this.handleSubmit.bind(this)}>
            Se connecter
          </button>
        </form>
      </div>
    );
  }
}
