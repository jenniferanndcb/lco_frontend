import React from "react";
import { connect } from "react-redux";
import { fetchLocalAuthority } from "../actions/postcodes";

class PostcodeForm extends React.Component {
  state = {
    postcode: ""
  };

  handleOnChange = e => {
    this.setState({
      postcode: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    let formData = {
      postcode: this.state.postcode
    };

    this.props.fetchLocalAuthority(formData);

    this.setState({
      postcode: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Enter Postcode:</label>
        <input
          type="text"
          value={this.state.postcode}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

export default connect(null, { fetchLocalAuthority })(PostcodeForm);
