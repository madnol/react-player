import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome//free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  const album = useSelector((state) => state.album.currentAlbum);

  return (
    <nav>
      <h1>{album.title}</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
