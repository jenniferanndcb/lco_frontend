//FIND_LOCAL_AUTHORITY: request postcode info and return local authority name

export default (state = { localAuthority: "", requesting: false }, action) => {
  switch (action.type) {
    case "START_FETCHING_LA'":
      return {
        ...state,
        localAuthority: "",
        requesting: true
      };

    case "FIND_LOCAL_AUTHORITY":
      return {
        ...state,
        localAuthority: action.payload,
        requesting: false
      };

    default:
      return state;
  }
};
