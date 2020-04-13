import React from "react";
import LondonProgrammeCard from "../components/LondonProgrammeCard";
import { connect } from "react-redux";
import {
  upvoteProgramme,
  downvoteProgramme,
  removeProgramme,
} from "../actions/programmes";
import LondonProgrammeForm from "../components/LondonProgrammeForm";

class LondonProgrammesContainer extends React.Component {
  renderProgrammes = () => {
    return this.props.programmes.map((programme, idx) => (
      <LondonProgrammeCard
        key={idx}
        programme={programme}
        downvoteProgramme={this.props.downvoteProgramme}
        upvoteProgramme={this.props.upvoteProgramme}
        removeProgramme={this.props.removeProgramme}
      />
    ));
  };

  render() {
    return (
      <div>
        <div className="section-container-programmes">
          <h2>What is happening around London?</h2>
          <LondonProgrammeForm />
        </div>
        <div className="section-programmes">
          <div className="row">
            <div className="col-md-4">{this.renderProgrammes()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    programmes: state.programmes,
  };
};

const actionCreators = {
  removeProgramme,
  upvoteProgramme,
  downvoteProgramme,
};

export default connect(
  mapStateToProps,
  actionCreators
)(LondonProgrammesContainer);
