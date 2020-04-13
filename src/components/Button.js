import React from "react";

const Button = (props) => {
    return (
      <div className="removeButton">
        {props.localAuths.map((localAuth) => (
          <button onClick={() => props.removeDataset(localAuth)}>
            {localAuth}
          </button>
        ))}
      </div>
    );
  }


export default Button;
