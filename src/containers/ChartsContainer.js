import React from "react";
import { connect } from "react-redux";
import { fetchLocalAuthData } from "../actions/localauthdata";
import AreaDropdown from "../components/AreaDropdown";

class ChartsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLocalAuthData();
  }

  render() {
    return (
      <div className="section-charts-container">
        <div className="page-title">
          <h1>Prevalance of Childhood Obesity in London 2018/19</h1>
        </div>
        <div>
          {this.props.localAuthData.length > 0 && (
            <AreaDropdown londonData={this.props.localAuthData} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    localAuthData: state.localAuthData.localAuthData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocalAuthData: () => dispatch(fetchLocalAuthData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);
