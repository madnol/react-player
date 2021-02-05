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

const Home = ({ searchAlbumAction, album, setCurrentAlbum }) => {
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
      <div className="searchPage__box">
        <h1>Search any album...</h1>
        <div className="searchPage__inputs">
          <div>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search an album..."
              name="album"
              onChange={(e) => setSearchAlbum(e.target.value)}
            />
          </div>

          <span className="searchPage__cta-btn" onClick={handleSearch}>
            {searchAlbum ? "Search Albums " : "New Research"}
          </span>
        </div>
      </div>
      <div>
        <b>
          {searchAlbum && `Results for ${searchAlbum}`}
          {/* here we will render an error message{error_msg && error_msg} */}
        </b>
      </div>
      <Row>
        {album.results &&
          album.results.map((res) => (
            <Col sm={6} md={3}>
              {/* // <Link to={`/album/${res.album.id}`} onClick={()=>handleCurrentAlbum(res.album.id)}> */}
              <Link onClick={() => handleCurrentAlbum(res.album.id)}>
                <Card album={res.album} />
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
