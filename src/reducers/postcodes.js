//FIND_LOCAL_AUTHORITY: request postcode info and return local authority name

export default (state = "", action) => {
  switch (action.type) {
    case "START_FETCHING_LA'":
      return {
        state,
        postcode: "",
        requesting: true
      };

    case "FIND_LOCAL_AUTHORITY":
      return {
        state,
        postcode: action.data,
        requesting: false
      };

    default:
      return state;
  }
};
