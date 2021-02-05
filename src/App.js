import React, { useState, useRef } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Album from "./pages/Album";
import Home from "./pages/Home";
//Import Styles
import "./styles/app.scss";
import { Container } from "react-bootstrap";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />

        <Container fluid>
          <NavBar />

          <Route path="/signup" exact component={Signup} />

          <Route exact path="/album/:id" component={Album} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Container>
      </Switch>
    </>
  );
}

export default App;
