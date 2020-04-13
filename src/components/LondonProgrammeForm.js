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
        <div class="form-group">
          <label>
            Programme Title:
            <input
              class="form-control form-control-lg"
              type="text"
              value={this.state.programme.title}
              onChange={this.handleOnChange}
              name="title"
            ></input>
          </label>
        </div>
        <div class="form-group">
          <label>
            Link:
            <input
              class="form-control form-control-lg"
              type="text"
              value={this.state.programme.url}
              onChange={this.handleOnChange}
              name="url"
            ></input>
          </label>
        </div>

        <div class="form-group">
          <label>
            Description:
            <input
              class="form-control form-control-lg"
              value={this.state.programme.description}
              onChange={this.handleOnChange}
              name="description"
            />
          </label>
        </div>
        <br />
        <div className="form-group">
          <button class="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default connect()(LondonProgrammeForm);
