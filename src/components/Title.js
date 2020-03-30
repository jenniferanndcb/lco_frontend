import React from "react";
import { connect } from "react-redux";


class Title extends React.Component {
  render() {
    return (
      <div>
        <h1>Prevalance of Childhood Obesity in London 2018/19</h1>
        <h2>London Borough of {this.props.localAuthority}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { localAuthority: state.postcodes.localAuthority };
};

export default connect(mapStateToProps)(Title);
