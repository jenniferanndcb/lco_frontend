import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";


class LocalAuthData extends React.Component {

  formatData = areaData => {
    return (areaData = {
      labels: this.props.areaData.map(arr => arr.age),
      datasets: [
        {
          label: this.props.areaData[0].area_name,
          backgroundColor: "rgba(0, 0, 255, 0.75)",
          barPercentage: 0.5,
          maxBarThickness: 150,
          minBarLength: 2,
          data: this.props.areaData.map(arr => arr.value)
        }
      ]
    });
  }

  formatLondonData = londonData => {
    return (londonData = {
      labels: this.props.londonData.map(arr => arr.age),
      datasets: [
        {
          label: "London",
          backgroundColor: "rgba(255, 0, 255, 0.75)",
          barPercentage: 0.5,
          maxBarThickness: 150,
          minBarLength: 2,
          data: this.props.londonData.map(arr => arr.value)
        }
      ]
    });
  };

  render() {
    this.props.londonData.length > 0 && this.props.areaData.length
  }

  //if this.props.localAuthority && render this.props.lond
  
}

const mapStateToProps = state => {
  return {
    localAuthData: state.localAuthData.londonData, 
    areaData: state.postcodes.localAuthority
  };
};

export default connect(mapStateToProps)(LocalAuthData)