import axios from "axios";
const { REACT_APP_API_URI } = process.env;

console.log(REACT_APP_API_URI);

export const fetchAlbumResults = async (query) => {
  try {
    const results = await axios.get(
      `${REACT_APP_API_URI}/api/songs/search/${query}`
    );
    return results.data;
  } catch (err) {
    console.log("there was a problem searching albums");
  }
};

export const fetchCurrentAlbum = async (id) => {
  try {
    const results = await axios.get(
      `${REACT_APP_API_URI}/api/songs/${id}`
    );
    return results.data;
  } catch (err) {
    console.log("there was a problem searching albums");
  }
};
