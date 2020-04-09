import React from "react";
import BarChart from "./BarChart";
import Button from "./Button";

class AreaDropdown extends React.Component {
  state = {
    // localAuth: "",
    localAuths: [],
  };

  handleOnChange = (e) => {
    this.setState({
      // localAuth: e.target.value,
      localAuths: this.state.localAuths.concat(e.target.value)
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    // this.addLocalAuth(this.state.localAuth);
    this.setState({
      localAuths: [],
    });
  };

  // addLocalAuth = (localAuth) => {
  //   this.setState((state) => {
  //     const localAuths = state.localAuths.concat(localAuth);

  //     return {
  //       ...localAuths,

  //     };
  //   });
  // };

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
          {this.state.localAuths[this.state.localAuths.length -1] && this.renderAreaName(this.state.localAuth)}
        </div>
        <div>
          {/* <Button localAuths={this.state.localAuths}/> */}
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
