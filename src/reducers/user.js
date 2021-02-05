export default function (state = {}, { type, payload }) {
  switch (type) {
    case "SET_USER_NAME":
      return {
        ...state,
        username: payload,
      };

    default:
      return state;
  }
}
