import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";


class LocalAuthData extends React.Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: "",
          backgroundColor: "rgba(255, 0, 255, 0.75)",
          data: []
        }
      ]
    }
  };
  
  
}

const mapStateToProps = state => {
  return {
    londonData: state.londonData.londonData
  };
};

export default connect(mapStateToProps)(LocalAuthData)