import React from "react";


class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Prevalance of Childhood Obesity in London 2018/19</h1>
        <div className="infotext">
          <p>
            Obesity is a complex public health challenge driven by a mixture of
            the social, economic, biological and environmental factors that
            shape our lives and individual behaviours. These drivers have become
            woven into the fabric of how we live our lives. This page aims to
            bring more understanding of the picture of childhood obesity in
            London as well as to feature London-wide initiatives to address this
            problem.
          </p>

          <p>
            The chart below shows the average prevalence of childhood obesity across London in %. 
            Find out more about the prevalence of childhood obesity in specific London Boroughs by selecting a Local Authority below.
          </p>
        </div>
      </div>
    );
  }
}


export default Title;
