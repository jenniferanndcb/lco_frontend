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

  handleOnSubmit = e => {
    e.preventDefault 

    let formData = {
      postcode: this.state.postcode
    }

    this.props.dispatch(findLocalAuthority(formData))

    this.setState({
      postcode: ""
    })
  }

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
