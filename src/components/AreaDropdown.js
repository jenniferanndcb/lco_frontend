import React from "react";
import BarChart from "./BarChart";
import Button from "./Button";

class AreaDropdown extends React.Component {
  state = {
    localAuths: [],
  };

  handleOnChange = (e) => {
    this.setState({
      localAuths: this.state.localAuths.concat(e.target.value),
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({
      localAuths: [],
    });
  };

  renderAreaName = (area) => {
    return <h2>London Borough of {area}</h2>;
  };

  handleSelect = (data) => {
    const localAuth = data.map((arr) => arr.area_name);
    const distinctLocalAuth = [...new Set(localAuth)];

    return distinctLocalAuth.map((area) => (
      <option value={area}>{area}</option>
    ));
  };

  removeDataset = (localAuth) => {
    this.setState({
      localAuths: this.state.localAuths.filter((el) => el !== localAuth),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="form">
          <form onSubmit={this.handleOnSubmit}>
            <label>Select Local Authority: </label>
            <select value={this.state.value} onChange={this.handleOnChange}>
              {this.handleSelect(this.props.londonData)}
            </select>
          </form>
        </div>
        <div className="selectedOption">
          {this.state.localAuths > 0 &&
            this.renderAreaName(
              this.state.localAuths[this.state.localAuths.length - 1]
            )}
        </div>

        <div>
          <Button
            localAuths={this.state.localAuths}
            removeDataset={this.removeDataset.bind(this)}
          />
          <BarChart
            localAuth={this.state.localAuths}
            londonData={this.props.londonData}
          />
        </div>
      </div>
    );
  }
}

export default AreaDropdown;
