import React from "react";

export default class PostcodeForm extends React.Component {
  state = {
    postcode: ""
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
