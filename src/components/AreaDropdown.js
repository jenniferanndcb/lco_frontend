import React from "react";
import BarChart from "./BarChart";
import Button from "./Button";

class AreaDropdown extends React.Component {
  state = {
    localAuths: [],
  };

  handleOnChange = (e) => {
    const localAuths = this.state.localAuths.concat(e.target.value);
    this.setState({
      localAuths: [...new Set(localAuths)],
    });
  };

  renderAreaName = (area) => {
    return <h2>London Borough of {area}</h2>;
  };

  listLondonBoroughs = (data) => {
    const localAuth = data.map((arr) => arr.area_name);
    const distinctLocalAuth = [...new Set(localAuth)];

    return distinctLocalAuth.map((area, i) => (
      <option key={i} value={area}>
        {area}
      </option>
    ));
  };

  removeDataset = (localAuth) => {
    this.setState({
      localAuths: this.state.localAuths.filter((el) => el !== localAuth),
    });
  };

  randomBgColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    const bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
  }

  render() {
    return (
      <div className="container">
        <div className="form">
          <form onSubmit={this.handleOnSubmit}>
            <label>Select Local Authority: </label>
            <div className="select">
              <select value={this.state.value} onChange={this.handleOnChange}>
                {this.listLondonBoroughs(this.props.londonData)}
              </select>
            </div>
          </form>
        </div>
        <div className="selectedOption">
          {this.state.localAuths.length > 0 &&
            this.renderAreaName(
              this.state.localAuths[this.state.localAuths.length - 1]
            )}
        </div>

        <div>
          <Button
            localAuths={this.state.localAuths}
            removeDataset={this.removeDataset}
          />
          <BarChart
            localAuth={this.state.localAuths}
            londonData={this.props.londonData}
            bgColor={this.randomBgColor}
          />
        </div>
      </div>
    );
  }
}

export default AreaDropdown;
