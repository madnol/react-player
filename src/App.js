import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Authorization/Signup";
//Import Styles
import "./styles/app.scss";
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Framer from "./components/Framer";
//Import Util
import data from "./util";

function App() {
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
    <Router>
      {/* <div className="App">
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />

        <Framer />
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
      </div> */}

      <Route path="/signup" exact component={Signup} />
    </Router>
  );
}

export default App;
