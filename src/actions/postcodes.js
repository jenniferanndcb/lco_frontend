//Find Local Authority based on postcode entered

export function findLocalAuthority(postcode) {
  debugger
  return dispatch => {
    dispatch({ type: "START_FETCHING_LA" });
    fetch("https://api.postcodes.io/postcodes" + "/" + {postcode})
      .then(res => res.json())
      .then(data => dispatch({ type: "FIND_LOCAL_AUTHORITY" }, data));
  };
}
