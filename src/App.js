import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./layers/Home";
import Show from "./layers/Show";
import Tarif from "./layers/Tarif";
import Book from "./layers/Book";
import Reservation from "./layers/Reservation";
import Contact from "./layers/Contact";
import Form from "./layers/Form";

import Log from "./layers/Log";
import Admin from "./layers/admin/Admin";
import AddArtist from "./layers/admin/AddArtist";
import SeeArtist from "./layers/admin/SeeArtist";

import "./App.css";

function App(props) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/shows")
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
          <Route exact path='/' component={Home} />
          <Route path='/show/:id' component={Show} />
          <Route path='/tarif' component={Tarif} />
          <Route path='/book' component={Book} />
          <Route path='/contact' component={Contact} />
          <Route path='/reservation' component={Reservation} />
          <Route path='/form' component={Form} />

          <Route path='/log' component={Log} />
          <Route path='/admin' component={Admin} />
          <Route path='/add-artist' component={AddArtist} />
          <Route path='/see-artist' component={SeeArtist} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default connect(null, null)(App);

// <Route exact path='/' component={SignIn} />
