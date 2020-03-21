import React from "react";

export default class PostcodeForm extends React.Component {
  state = {
    postcode: ""
  };

  handleOnChange = e => {
    this.setState({
      postcode: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Enter Postcode:</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}
