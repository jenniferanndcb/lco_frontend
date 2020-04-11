import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="removeButton">
        {this.props.localAuths.map((localAuth) => (
          <button onClick={() => this.props.removeDataset(localAuth)}>
            {localAuth}
          </button>
        ))}
      </div>
    );
  }
}

export default Button;
