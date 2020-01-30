import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

const Signup = ({ history }) => {
  const handleSignup = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input name='email' type='email' placeholder='Email' />
        <label>Password</label>
        <input name='password' type='password' placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
