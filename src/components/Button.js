import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="keepButton">
        <button onClick={() => this.props.keepData(this.props.localAuth)}>
          Keep
        </button>
      </div>
    );
  }
}

export default Button;
