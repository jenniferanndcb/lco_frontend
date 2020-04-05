import React from "react";
import { connect } from "react-redux";
import { fetchLocalAuthData } from "../actions/localauthdata";
import Charts from "./Charts"

class PostcodeForm extends React.Component {
  state = {
    localAuth: "",
  };

  componentDidMount() {
    this.props.fetchLocalAuthData();
  }

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
        {this.props.localAuth.length > 0 && (
          <form onSubmit={this.handleOnSubmit}>
            <label>Select Local Authority</label>
            <select value={this.state.value} onChange={this.handleOnChange}>
              {this.handleSelect(this.props.localAuth)}
            </select>
          </form>
        )}
        </div>
        <div className="selectedOption">{this.state.localAuth && this.renderAreaName(this.state.localAuth)}</div>
        <div>
          <Charts localAuth={this.state.localAuth}/>
        </div>
      </div>
    );
  }
};


const mapStatetoProps = (state) => {
  return {
    localAuth: state.localAuthData.localAuthData,
  };
};

export default connect(mapStatetoProps, { fetchLocalAuthData })(PostcodeForm);
