import { LOGIN } from "./types";
import { userLogin, userRegister, setUpUser } from "../utils/fetches";

export const loggingIn = (credentials) => async (dispatch) => {
  console.log(credentials);
  try {
    const token = await userLogin(credentials);
    console.log(token);
    const user = await setUpUser();
    dispatch({
      type: LOGIN,
      payload: user,
    });
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};
