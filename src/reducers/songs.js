import { SEARCH_ALBUMS } from "../actions/types";

export default function (state = {}, { type, payload }) {
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

    default:
      return state;
  }
}
