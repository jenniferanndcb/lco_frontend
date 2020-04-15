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
          <p>The chart below shows the average prevalence of childhood obesity
          across London in % in 2018-19. Find out more about the prevalence of childhood
          obesity in specific London Boroughs by selecting a Local Authority
          below.</p>
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
