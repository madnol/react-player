import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AppsIcon from "@material-ui/icons/Apps";
import "../styles/_navbar.scss";
import { useSelector } from "react-redux";

// const mapStateToProps = (state) => {
//   return state;
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     resetresults: () => dispatch(resetResults()),
//   };
// };
const NavBar = ({}) => {
  const user = useSelector((state) => state.user);
  return (
    <Navbar className="navBar">
      <Link to="/home" className="navBar__logo">
        <Navbar.Brand href="#home">
          <AppsIcon />
        </Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
      </Nav>
      {user.currentUser && user.currentUser.name}{" "}
      <Link to="/favorites">
        <FavoriteBorderIcon />
        {user.favorites.length}
      </Link>
    </Navbar>
  );
};

export default withRouter(NavBar);
//  withRouter(connect(mapStateToProps, mapDispatchToProps)
