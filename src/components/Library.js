import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  audioRef,
  currentSong,
  libraryStatus,
  fetchedSongs,
}) => {
  console.log(fetchedSongs);

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {fetchedSongs &&
          fetchedSongs.map(song => (
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
