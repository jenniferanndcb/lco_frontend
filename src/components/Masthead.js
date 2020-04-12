import React from "react";
import londonSkyline from "../assets/londonSkyline.png";

class Masthead extends React.Component {
  render() {
    return (
      <div className="img">
        <img src={londonSkyline} />
      </div>
    );
  }
}

export default Masthead;
