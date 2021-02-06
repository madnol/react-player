import React, { useEffect } from "react";

const LibrarySong = ({
  song,
  id,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add Active State
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //Check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(audio => audioRef.current.play());
      }
    }
  };

  // console.log(song);

  return (
    <>
      {song && (
        <div
          onClick={songSelectHandler}
          className={`library-song ${song.active ? "selected" : ""}`}
        >
          <img src={song.album.cover_medium} alt={song.title}></img>
          <div className="song-description">
            <h3>{song.title}</h3>
            <h4>{song.artist.name}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default LibrarySong;
