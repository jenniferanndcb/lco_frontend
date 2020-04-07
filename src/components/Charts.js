import React from "react";
import { Bar } from "react-chartjs-2";
import { fetchLocalAuthData } from "../actions/localauthdata";
import { connect } from "react-redux";

class Charts extends React.Component {


  formatLondonData = (londonData) => {
    return (londonData = {
      labels: ["4-5 year olds", "10-11 year olds"],
      datasets: [
        {
          label: "London",
          backgroundColor: "rgba(100, 0, 250, 0.75)",
          barPercentage: 0.5,
          maxBarThickness: 150,
          minBarLength: 2,
          data: this.filteredLondon(this.props.londonData).map(
            (arr) => arr.value
          ),
        },
        {
          label: this.props.localAuth,
          backgroundColor: "rgba(90, 202, 215, 0.75)",
          barPercentage: 0.5,
          maxBarThickness: 150,
          minBarLength: 2,
          data: this.props.londonData
            .filter((data) => data.area_name === this.props.localAuth)
            .map((arr) => arr.value),
        },
      ],
    });
  };

  filteredLondon = (data) => {
    return data.filter((data) => data.region_name === "London");
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
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                maintainAspectRatio: false,
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    londonData: state.localAuthData.localAuthData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocalAuthData: () => dispatch(fetchLocalAuthData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Charts);
