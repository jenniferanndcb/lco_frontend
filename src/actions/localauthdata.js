
export function fetchLocalAuthData() {
  return dispatch => {
    dispatch({ type: "GET_LONDON_DATA" });
    fetch("http://localhost:3000/london")
      .then(res => res.json())
      .then(data => dispatch(allLocalAuthData(data)));
  };
}

export const allLocalAuthData = localAuthData => ({
  type: "ALL_LOCAL_AUTH_DATA",
  payload: localAuthData
});
