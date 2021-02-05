import { SEARCH_ALBUMS } from "../actions/types";

const songReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SEARCH_ALBUMS:
      return {
        ...state,
        results: payload,
      };
    default:
      return state;
  }
};

export default songReducer;
