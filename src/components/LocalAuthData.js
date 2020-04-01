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

  //if this.props.localAuthority && render this.props.lond
  
}

const mapStateToProps = state => {
  return {
    localAuthData: state.localAuthData.londonData, 
    localAuthority: state.postcodes.localAuthority
  };
};

export default connect(mapStateToProps)(LocalAuthData)