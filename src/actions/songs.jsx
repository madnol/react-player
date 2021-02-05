import { SEARCH_ALBUMS } from "./types";
import { fetchAlbumResults } from "../utils/fetches";

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
