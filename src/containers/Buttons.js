import React from "react";
import Button from "../components/Button";
import { connect } from "react-redux";


class Buttons extends React.Component {
  render() {
    return (
      <div>
        <Button removeDataset={this.props.removeDataset} />
      </div>
    );
  }
}

const mapStateToProps = ({ localAuthData }) => ({ localAuthData })

const mapDispatchToProps = (dispatch) => ({
  removeDataset: (id) => dispatch({ type: "REMOVE_DATASET", id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
