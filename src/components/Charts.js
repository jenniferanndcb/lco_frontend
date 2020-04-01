import React from "react";
import { Bar } from "react-chartjs-2";
import { fetchLondonData } from "../actions/londondata";
import { connect } from "react-redux";

class Charts extends React.Component {
  state = {
    data: {
      labels: "",
      datasets: [
        {
          label: "",
          backgroundColor: "rgba(255, 0, 255, 0.75)",
          data: ""
        }
      ]
    }
  };

  componentDidMount() {
    this.props.fetchLondonData();
  }

  formatLondonData = data => {
    data = {
      labels: ["4-5 year olds", "10-11 year olds"],
      datasets: [
        {
          label: this.props.londonData.map(this.renderPlace)
        }
      ]
    };
  };

  renderPlace(arr) {
    return <span>{arr.region_name}</span>
  }

  render() {
    return (
      <div>
        <div style={{ position: "relative", width: 1000, height: 550 }}>
          {this.props.londonData.length > 0 && (
            <Bar
              data={this.formatLondonData(this.props.londonData)}
              options={{ maintainAspectRatio: true }}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    londonData: state.londonData.londonData
  };
};

export default connect(mapStateToProps, { fetchLondonData })(Charts);
