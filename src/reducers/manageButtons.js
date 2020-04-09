import uuid from "uuid";

export default (state = { localAuthData: [] }, action) => {
  switch (action.type) {
    case "CREATE_BUTTON":
      const localAuth = {
        id: uuid(),
        name: action.name,
      };
      return {
        ...state,
        localAuthData: [...state.localAuthData, localAuth],
      };

    case "REMOVE_DATASET":
      const localAuthData = state.localAuthData.filter(
        (localAuth) => localAuth.id !== action.id
      );

      return { localAuthData };

    default:
      return state;
  }
};
