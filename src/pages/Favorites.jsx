import React from "react";
import "../styles/_home.scss";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { searchAlbum, setCurrentAlbum } from "../actions/songs";
import { Row, Col } from "react-bootstrap";
import Card from "../components/CardAlbum";
import { Link } from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
  return {
    searchAlbumAction: (query) => dispatch(searchAlbum(query)),
    setCurrentAlbum: (id) => dispatch(setCurrentAlbum(id)),
  };
};

const mapStateToProps = (state) => {
  return state;
};

const Home = ({ searchAlbumAction, album,user, setCurrentAlbum }) => {
  const [searchAlbum, setSearchAlbum] = useState("");

  useEffect(() => {
    console.log(album);
  }, []);

  const handleSearch = async () => {
    try {
      const search = await searchAlbumAction(searchAlbum);
      console.log(album);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCurrentAlbum = (id) => {
    console.log(id);
    setCurrentAlbum(id);
    console.log(album);
    //we are going to fetch the current album
    //we are going to dispatch an action setCurrentAlbum which will set the current album within the store
  };

  return (
    <div className={`searchPage ${!searchAlbum ? "no-results" : ""}`}>
     
      <Row>
        {user.favorites &&
          user.favorites.map((res) => (
            <Col sm={6} md={6}>
              {/* // <Link to={`/album/${res.album.id}`} onClick={()=>handleCurrentAlbum(res.album.id)}> */}
              <Link onClick={() => handleCurrentAlbum(res.album.id)}>
                <Card album={res} />
              </Link>
            </Col>
          ))}
      </Row>
      {/* here we will put the results <Results/>
       */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
