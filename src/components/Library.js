import React from "react";
import LibrarySong from "./LibrarySong";
import { useSelector } from "react-redux";
const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  audioRef,
  currentSong,
  libraryStatus,
}) => {
  const album = useSelector((state) => state.album);
  console.log(album);

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            setSongs={setSongs}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
