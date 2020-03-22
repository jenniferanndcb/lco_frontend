import React from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

class Charts extends React.Component {
  render() {
    return (
      <div>
        <Bar />
      </div>
    );
  }
}

export default Charts;
