import React, { useState, useRef } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Album from "./pages/Album";
import Home from "./pages/Home";
//Import Styles
import "./styles/app.scss";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/album/:id" component={Album} />
      <Route exact path="/home" component={Home} />
    </>
  );
}

export default App;
