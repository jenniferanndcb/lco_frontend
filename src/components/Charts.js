import React from "react";
import { Bar } from "react-chartjs-2";
import { fetchLondonData } from "../actions/londondata";
import { fetchLocalAuthData } from "../actions/localauthdata";
import { connect } from "react-redux";

class Charts extends React.Component {
  componentDidMount() {
    this.props.fetchLondonData();
    this.props.fetchLocalAuthData();
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
    const finishedFetching = this.props.londonData.length > 0;
    return (
      <div>
        <div style={{ position: "relative", width: 1000, height: 650 }}>
          {finishedFetching && (
            <Bar
              data={this.formatLondonData(this.props.londonData)}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true
                      }
                    }
                  ]
                },
                maintainAspectRatio: false
              }}
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

const mapDispatchToProps = dispatch => {
  return {
    fetchLondonData: () => dispatch(fetchLondonData()),
    fetchLocalAuthData: () => dispatch(fetchLocalAuthData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
