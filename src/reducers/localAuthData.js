export default (state = { localAuthData: "", requesting: false }, action) => {
  switch (action.type) {
    case "GET_LOCAL_AUTH_DATA":
      return {
        ...state,
        localAuthData: "",
        requesting: true
      };

    case "ALL_LOCAL_AUTH_DATA":
      return {
        ...state,
        localAuthData: action.payload,
        requesting: false
      };

    default:
      return state;
  }
};
