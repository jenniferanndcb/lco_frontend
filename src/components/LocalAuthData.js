import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";


class Bar extends React.Component {
  
  
}

const mapStateToProps = state => {
  return {
    londonData: state.londonData.londonData
  };
};

export default connect(mapStateToProps)(Bar)