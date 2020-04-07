import React from "react";
import { Chart } from "react-chartjs-2";

let barChart;

class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.buildChart();
  }

  buildChart() {
    var ctx = document.getElementById("barChart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["4-5 year olds", "10-11 year olds"],
        datasets: [
          {
            label: "London",
            backgroundColor: "rgba(100, 0, 250, 0.75)",
            barPercentage: 0.5,
            maxBarThickness: 150,
            minBarLength: 2,
            data: this.props.londonData
              .filter((data) => data.region_name === "London")
              .map((arr) => arr.value),
          },
        ],
      },
      options: {
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
      }
    });
  }

  render() {
    return <canvas id="barChart" />;
  }
}

export default BarChart;
