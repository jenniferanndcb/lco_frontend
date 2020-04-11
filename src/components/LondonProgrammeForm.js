import React from "react";

class LondonProgrammeForm extends React.Component {
  state = {
    programme: {
      title: "",
      url: "",
      description: "",
    },
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="title">
        <h2>What is happening around London?</h2>
      </div>
      // <div className="programmes">
      //   <form onSubmit={this.handleOnSubmit}>

      //   </form>
      // </div>
    );
  }
}

export default LondonProgrammes;
