import React from "react";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import SignIn from "./layers/SignIn";
import Home from "./layers/Home";
import Artist from "./layers/Artist";
import Tarif from "./layers/Tarif";
import Book from "./layers/Book";
import Contact from "./layers/Contact";
import Form from "./layers/Form";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar />
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/home' component={Home} />
          <Route path='/artist' component={Artist} />
          <Route path='/tarif' component={Tarif} />
          <Route path='/book' component={Book} />
          <Route path='/contact' component={Contact} />
          <Route path='/Form' component={Form} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
