import React from "react";
import { Chart } from "react-chartjs-2";

let barChart;

class BarChart extends React.Component {
  componentDidMount() {
    this.buildChart();
  }

  buildChart() {
    var ctx = document.getElementById("barChart").getContext("2d");
    barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["4-5 year olds", "10-11 year olds"],
        datasets: [
          {
            label: "London",
            backgroundColor: "rgba(100, 0, 250)",
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
      },
    });
  }

  addSelectedLocalAuth(selectedLocalAuth) {
    this.addData(
      barChart,
      selectedLocalAuth,
      this.randomBgColor(),
      this.filteredData(this.props.londonData)
    );
  }

  addData(chart, label, color, data) {
    chart.data.datasets.push({
      label: label,
      backgroundColor: color,
      barPercentage: 0.5,
      maxBarThickness: 150,
      minBarLength: 2,
      data: data,
    });
    chart.update();
  }

  randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    const bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
  }

  filteredData(londonData) {
    return londonData
      .filter(
        (data) =>
          data.area_name ===
          this.props.localAuth[this.props.localAuth.length - 1]
      )
      .map((arr) => arr.value);
  }

  render() {
    return (
      <div
        className="barChart"
        style={{ position: "relative", width: 1000, height: 650 }}
      >
        <canvas id="barChart" />
        {this.props.localAuth.length > 0 &&
          this.addSelectedLocalAuth(
            this.props.localAuth[this.props.localAuth.length - 1]
          )}
      </div>
    );
  }
  debugger;
}

export default BarChart;
