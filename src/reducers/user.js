import { LOGIN } from "../actions/types";


export default function (state = {}, { type, payload }) {
  switch (type) {
    case "SET_USER_NAME":
      return {
        ...state,
        username: payload,
      };
    case LOGIN:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
}
