import React from "react";
import londonSkyline from "../assets/londonSkyline.png";

const Masthead = () => {
  return (
    <div className="masthead-container">
      <div className="mh-h1">
        <h1><span className="highlight">Time to solve Childhood Obesity in London</span></h1>
      </div>
      <div className="masthead">
        <img src={londonSkyline} alt="london skyline black and white" />
      </div>
    </div>
  );
};

export default Masthead;
