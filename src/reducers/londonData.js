export default (state = { londonData: "", requesting: false }, action) => {
  switch (action.type) {
    case "GET_LONDON_DATA'":
      return {
        state,
        londonData: "",
        requesting: true
      };

    case "SHOW_LONDON_DATA":
      return {
        state,
        londonData: action.payload,
        requesting: false
      };

    default:
      return state;
  }
};