import React from "react";

const Button = (props) => {
  return (
    <div className="removeButton">
      {props.localAuths.map((localAuth, i) => (
        <div key={i} className="button">
          <button onClick={() => props.removeDataset(localAuth)}>
            {localAuth}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Button;
