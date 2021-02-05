import axios from "axios";
const { REACT_APP_API_URI } = process.env;
axios.defaults.withCredentials = true;

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
    const results = await axios.get(`${REACT_APP_API_URI}/api/songs/${id}`);
    return results.data;
  } catch (err) {
    console.log("there was a problem searching albums");
  }
};

export const userLogin = async (credentials) => {
  try {
    const results = await axios.post(
      `${REACT_APP_API_URI}/api/users/login`,
      credentials
    );
    return results.data;
  } catch (err) {
    console.log("there was a problem searching albums");
  }
};

export const userRegister = async (credentials) => {
  try {
    const data = JSON.stringify(credentials);
    console.log(data);

    const results = await axios.post(`${REACT_APP_API_URI}/api/users/`, {
      data,
    });
    console.log(results);
    return results.data;
  } catch (err) {
    console.log("there was a problem searching albums");
  }
};

export const setUpUser = async () => {
  try {
    const results = await axios.get(`${REACT_APP_API_URI}/api/users/me`, {
      withCredentials: true,
    });
    return results.data.currentUser;
  } catch (err) {
    console.log("there was a problem searching albums");
  }
};
