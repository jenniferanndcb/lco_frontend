import React from "react";
import { connect } from "react-redux";

class Buttons extends React.Component {
  render(){
    return (
      <div>
        <Button keepData={this.props.keepData} />
        <Buttons removeData={this.props.removeData} />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  keepData: (localAuthData) => dispatch({type: "KEEP_DATA"}, localAuthData),
  removeData: (id) => dispatch({ type: "REMOVE_DATA"})
});

export default connect(null, mapDispatchToProps)(Buttons)
