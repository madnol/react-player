import { SEARCH_ALBUMS, SET_CURRENT_ALBUM } from "../actions/types";

export default function (state = {}, { type, payload }) {
  console.log(type);
  switch (type) {
    case "ADD_SONG_TO_PLAYLIST":
      return {
        ...state,
        songs: state.songs.concat(payload),
      };
    case "REMOVE_SONG_FROM_PLAYLIST":
      return {
        ...state,
        songs: [...state.songs.filter((songId) => songId !== payload)],
      };
    case SEARCH_ALBUMS:
      return {
        ...state,
        results: payload,
      };
    case SET_CURRENT_ALBUM:
      return {
        ...state,
        currentAlbum: payload,
      };

    default:
      return state;
  }
}
