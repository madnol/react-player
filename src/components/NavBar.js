import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AppsIcon from "@material-ui/icons/Apps";
import "../styles/_navbar.scss";

// const mapStateToProps = (state) => {
//   return state;
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     resetresults: () => dispatch(resetResults()),
//   };
// };
const NavBar = ({}) => {
  return (
    <Navbar className="navBar">
      <Link to="/" className="navBar__logo">
        <Navbar.Brand href="#home">
          <AppsIcon /> 
        </Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
      </Nav>
      <Link to="/favorites">
        <FavoriteBorderIcon />
      </Link>
    </Navbar>
  );
};

export default withRouter(NavBar);
//  withRouter(connect(mapStateToProps, mapDispatchToProps)
