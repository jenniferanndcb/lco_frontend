import React from "react";
import Charts from "./Charts";
import Button from "./Button";

class AreaDropdown extends React.Component {
  state = {
    localAuth: "",
  };

  handleOnChange = (e) => {
    this.setState({
      localAuth: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    this.renderAreaName(this.state.localAuth);
    e.preventDefault();

    this.setState({
      localAuth: "",
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
          {this.state.localAuth && this.renderAreaName(this.state.localAuth)}
        </div>
        <div>
          <Charts
            localAuth={this.state.localAuth}
            londonData={this.props.londonData}
          />
          <Button localAuth={this.state.localAuth} />
        </div>
      </div>
    );
  }
}

export default AreaDropdown;
