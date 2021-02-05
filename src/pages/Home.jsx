import React from "react";
import "../styles/_home.scss";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

// const mapDispatchToProps = (dispatch) => {};
// const mapStateToProps = (state) => {};

const Home = ({}) => {
  const [searchAlbum, setSearchAlbum] = useState("");

  useEffect(() => {}, []);

  const handleSearch = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
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

      {/* here we will put the results <Results/>
       */}
    </div>
  );
};

export default Home;
// connect(mapStateToProps, mapDispatchToProps);
