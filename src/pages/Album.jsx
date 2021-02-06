import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { searchAlbum } from "../actions/songs";

//Import Styles
import "../styles/app.scss";
//Adding Components
import Player from "../components/Player";
import Song from "../components/Song";
import Library from "../components/Library";
import Nav from "../components/Nav";
import Framer from "../components/Framer";
//Import Util
import data from "../util";

const Album = () => {
  //Get our data back

  //*Fetching the songs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchAlbum());
    console.log(album);
  }, [dispatch]);

  //*Get our data back
  const album = useSelector(state => state.album);

  // console.log(type);
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currenttime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

      {/* <Framer /> */}
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        // fetchedSongs={song}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Album;
