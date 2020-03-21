//FIND_LOCAL_AUTHORITY: request postcode info and return local authority name

export default (state = "", action) => {
  switch (action.type) {
    case "FIND_LOCAL_AUTHORITY":
      return fetch("");

    default:
      return state;
  }
};
