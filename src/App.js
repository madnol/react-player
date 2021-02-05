import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Authorization/Signup";
import Login from "./components/Authorization/Login";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Album from "./pages/Album";
import Home from "./pages/Home";

//Import Styles
import "./styles/app.scss";

function App() {
  return (
    <>
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
  
      <NavBar />
      <Route exact path="/album/:id" component={Album} />
      <Route exact path="/home" component={Home} />
    </>

  );
}

export default App;
