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
    this.setState({
      data: {
        labels: ["4-5 year olds", "10-11 year olds"],
        datasets: [
          {
            label: this.props.londonData.map(this.renderPlace)
          }
        ]
      }
    });
  }

  renderPlace(data) {
    return <span>{data.region_name}</span>;
  }

  render() {
    return (
      <div style={{ position: "relative", width: 1000, height: 550 }}>
        <Bar data={this.state.data} options={{ maintainAspectRatio: true }} />
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
