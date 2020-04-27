import React from "react";
import { Chart } from "react-chartjs-2";

// let barChart;

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      chart: {
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
                scaleLabel: {
                  display: true,
                  labelString:
                    "Proportion of children who were overweight or obese in %",
                },
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          maintainAspectRatio: false,
        },
      },
      localAuths: [],
      data: [],
    };
  }

  componentDidMount() {
    this.myChart = new Chart(this.chartReference.current, this.state.chart);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.localAuth !== prevState.localAuths) {
      const newLocalAuth = nextProps.localAuth.map((la) => {
        const chosenLa45 = nextProps.londonData.find(
          (obj) => la === obj.area_name && obj.age === "4-5 yrs"
        );
        const chosenLa1011 = nextProps.londonData.find(
          (obj) => la === obj.area_name && obj.age === "10-11 yrs"
        );
        return {
          label: la,
          backgroundColor: nextProps.bgColor(),
          barPercentage: 0.5,
          maxBarThickness: 150,
          minBarLength: 2,
          data: [chosenLa45.value, chosenLa1011.value],
        };
      });
      return {
        ...prevState,
        localAuths: nextProps.localAuth,
        data: newLocalAuth,
      };
    }
    return null;
  }

  componentDidUpdate() {
    this.myChart.data.datasets = this.state.data;
    this.myChart.update();
  }

  // buildChart() {
  //   var ctx = document.getElementById("barChart").getContext("2d");
  //   barChart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["4-5 year olds", "10-11 year olds"],
  //       datasets: [
  //         {
  //           label: "London",
  //           backgroundColor: "rgba(100, 0, 250)",
  //           barPercentage: 0.5,
  //           maxBarThickness: 150,
  //           minBarLength: 2,
  //           data: this.props.londonData
  //             .filter((data) => data.region_name === "London")
  //             .map((arr) => arr.value),
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             scaleLabel: {
  //               display: true,
  //               labelString:
  //                 "Proportion of children who were overweight or obese in %",
  //             },
  //             ticks: {
  //               beginAtZero: true,
  //             },
  //           },
  //         ],
  //       },
  //       maintainAspectRatio: false,
  //     },
  //   });
  //   this.setState({
  //     chart: barChart,
  //   });
  // }

  // updateChart(newLocalAuths) {
  //   newLocalAuths.length > 0 &&
  //     this.addSelectedLocalAuth(newLocalAuths[newLocalAuths.length - 1]);
  // }

  // addSelectedLocalAuth(selectedLocalAuth) {
  //   this.addData(
  //     barChart,
  //     selectedLocalAuth,
  //     this.randomBgColor(),
  //     this.filteredData(this.props.londonData)
  //   );
  // }

  // addData(chart, label, color, data) {
  //   chart.data.datasets.push({
  //     label: label,
  //     backgroundColor: color,
  //     barPercentage: 0.5,
  //     maxBarThickness: 150,
  //     minBarLength: 2,
  //     data: data,
  //   });
  //   chart.update();
  // }

  // filteredData(londonData) {
  //   return londonData
  //     .filter(
  //       (data) =>
  //         data.area_name ===
  //         this.props.localAuth[this.props.localAuth.length - 1]
  //     )
  //     .map((arr) => arr.value);
  // }

  render() {
    return (
      <div>
        <div
          className="barChart"
          style={{ position: "relative", width: 1000, height: 650 }}
        >
        
          <canvas ref={this.chartReference} />

        
        </div>
      </div>
    );
  }
}

export default BarChart;
