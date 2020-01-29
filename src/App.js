import React from "react";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import SignIn from "./layers/SignIn";
import Home from "./layers/Home";
import Show from "./layers/Show";
import Tarif from "./layers/tarif";
import Book from "./layers/book";
import Contact from "./layers/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/home' component={Home} />
          <Route path='/Show' component={Show} />
          <Route path='/Tarif' component={Tarif} />
          <Route path='/Book' component={Book} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
