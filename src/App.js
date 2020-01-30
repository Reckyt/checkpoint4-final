import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import SignIn from "./layers/SignIn";
import Home from "./layers/Home";
import Show from "./layers/Show";
import Tarif from "./layers/Tarif";
import Book from "./layers/Book";
import Reservation from "./layers/Reservation";
import Contact from "./layers/Contact";
import Form from "./layers/Form";

import "./App.css";

function App(props) {
  const [shows, setShows] = useState([]);

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
    <BrowserRouter>
      <ScrollToTop>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SignIn} />
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
  );
}

export default connect(null, null)(App);
