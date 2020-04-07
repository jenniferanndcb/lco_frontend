import React from "react";
import { Bar } from "react-chartjs-2";

let barChart;

class Charts extends React.Component {
  buildChart = () => {
    barChart = new Bar({
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
    });
  };

  

  // formatLondonData = (londonData) => {
  //   return (londonData = {
  //     labels: ["4-5 year olds", "10-11 year olds"],
  //     datasets: [
  //       {
  //         label: "London",
  //         backgroundColor: "rgba(100, 0, 250, 0.75)",
  //         barPercentage: 0.5,
  //         maxBarThickness: 150,
  //         minBarLength: 2,
  //         data: this.props.londonData
  //           .filter((data) => data.region_name === "London")
  //           .map((arr) => arr.value),
  //       },

  // label: this.props.localAuth,
  // backgroundColor: "rgba(90, 202, 215, 0.75)",
  // barPercentage: 0.5,
  // maxBarThickness: 150,
  // minBarLength: 2,
  // data: this.props.londonData
  //   .filter((data) => data.area_name === this.props.localAuth)
  //       //   .map((arr) => arr.value),
  //     ],
  //   });
  //   this.props.localAuth &&
  //     this.addData(
  //       barChart,
  //       this.props.localAuth,
  //       this.randomBgColor,
  //       this.filteredData
  //     );
  // };

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

  filteredData() {
    this.props.londonData
      .filter((data) => data.region_name === this.props.localAuth)
      .map((arr) => arr.value);
  }

  render() {
    return (
      <div>
        <div
          className="barChart"
          style={{ position: "relative", width: 1000, height: 650 }}
        >
          {/* <Bar
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
          /> */}
          {this.buildChart()}
        </div>
      </div>
    );
  }
}

export default Charts;
