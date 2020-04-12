import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addProgramme } from "../actions/programmes";

class LondonProgrammeForm extends React.Component {
  state = {
    programme: {
      title: "",
      url: "",
      description: "",
    },
  };

  handleOnChange = (e) => {
    this.setState({
      programme: {
        [e.target.name]: e.target.value,
      },
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    let formData = {
      id: uuid(),
      title: this.state.programme.title,
      url: this.state.programme.url,
      description: this.state.programme.description,
    };

    this.props.dispatch(addProgramme(formData));

    this.setState({
      title: "",
      url: "",
      description: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          Programme Title:
          <input
            type="text"
            value={this.state.programme.title}
            onChange={this.handleOnChange}
            name="title"
          ></input>
        </label>
        <br />
        <br />
        <label>
          Link:
          <input
            type="text"
            value={this.state.programme.url}
            onChange={this.handleOnChange}
            name="url"
          ></input>
        </label>
        <br />
        <br />
        <label>
          Description:
          <textarea
            value={this.state.programme.description}
            onChange={this.handleOnChange}
            name="description"
          />
        </label>
        <br />
        <div className="form-group">
          <div className="col-md-6 col-md-offset-4">
            <button type="submit" className="btn btn-default">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect()(LondonProgrammeForm);
