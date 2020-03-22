//Find Local Authority based on postcode entered

export function fetchLocalAuthority(postcode) {
  return dispatch => {
    dispatch({ type: "START_FETCHING_LA" });
    fetch("https://api.postcodes.io/postcodes/" + postcode.postcode)
      .then(res => res.json())
      .then(data =>
        dispatch(findLocalAuthority(data.result.admin_district))
      );
  };
}

export const findLocalAuthority = (localAuthority) => ({
  type: "FIND_LOCAL_AUTHORITY",
  payload: localAuthority
})
