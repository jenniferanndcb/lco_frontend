import React from "react";

export default class HealthyEating extends React.Component {
  render() {
    return (
      <div className="healthy-eating-container">
        <iframe
          title="healthyeating"
          id="tool_eatwell"
          src="https://assets.nhs.uk/tools/eatwell/index.html?syn_id=YWRvYm9saWZlQGdtYWlsLmNvbQ=="
          style={{ width: "100%" }}
          frameBorder={0}
          scrolling="yes"
          seamless
        />
      </div>
    );
  }
}
