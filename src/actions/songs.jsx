import { SEARCH_ALBUMS, SET_CURRENT_ALBUM } from "./types";
import { fetchAlbumResults, fetchCurrentAlbum } from "../utils/fetches";

export const searchAlbum = (query) => async (dispatch) => {
  try {
    const albums = await fetchAlbumResults(query);
    dispatch({
      type: SEARCH_ALBUMS,
      payload: albums,
    });
    console.log(albums);
  } catch (err) {
    console.log(err);
  }
};

export const setCurrentAlbum = (id) => async (dispatch) => {
  try {
    const album = await fetchCurrentAlbum(id);
    console.log(album);
    dispatch({
      type: SET_CURRENT_ALBUM,
      payload: album,
    });
  } catch (err) {
    console.log(err);
  }
};
