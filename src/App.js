import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// import SignIn from "./layers/SignIn";
import Home from "./layers/Home";
import Show from "./layers/Show";
import Tarif from "./layers/Tarif";
import Book from "./layers/Book";
import Reservation from "./layers/Reservation";
import Contact from "./layers/Contact";
import Form from "./layers/Form";

import Home2 from "./sign/Home";
import Login from "./sign/Login";
import Signup from "./sign/SignUp";

import { AuthProvider } from "./sign/Auth";

import PrivateRoute from "./sign/PrivateRoute";

import "./App.css";

function App(props) {
  const [shows, setShows] = useState([]);

  console.log(shows);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/show")
      .then(res => res.data)
      .then(data => setShows(data));
  }, []);

  props.dispatch({
    type: "GET_SHOWS",
    payload: shows
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <PrivateRoute exact path='/' component={Home2} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </div>
          <NavBar />
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/show/' component={Show} />
            <Route path='/tarif' component={Tarif} />
            <Route path='/book' component={Book} />
            <Route path='/contact' component={Contact} />
            <Route path='/reservation' component={Reservation} />
            <Route path='/form' component={Form} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default connect(null, null)(App);

// <Route exact path='/' component={SignIn} />
