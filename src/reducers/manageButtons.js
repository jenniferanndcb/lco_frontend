export default (state = { localAuthData: [] }, action) => {
  switch (action.type) {
    case "KEEP_DATA":
      return {
        ...state,
        localAuthData: [...state.localAuthData, localAuthData],
      };

    default:
      return state;
  }
};
