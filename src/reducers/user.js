import { LOGIN, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types";

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
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id != payload.id),
      };

    default:
      return state;
  }
}
