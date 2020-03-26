//fetch london data

export function fetchLondonData() {
  return dispatch => {
    dispatch({ type: "GET_LONDON_DATA" });
    fetch("http://localhost:3000/london")
      .then(res => res.json())
      .then(data => dispatch(showLondonData(data)));
  };
}

export const showLondonData = () => ({
  type: "SHOW_LONDON_DATA",
  payload: londonData
});
