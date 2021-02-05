export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_SONG_TO_PLAYLIST":
      return {
        ...state,
        songs: state.songs.concat(action.payload),
      };
    case "REMOVE_SONG_FROM_PLAYLIST":
      return {
        ...state,
        songs: [...state.songs.filter((songId) => songId !== action.payload)],
      };

    default:
      return state;
  }
}
