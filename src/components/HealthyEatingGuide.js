import React from "react";

export default class HealthyEating extends React.Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    // console.log("clicked!");
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    console.log('a');

    fetch("http://localhost:3000/londonfdjklfjdlsfs")
      .then(resp => {
        if(resp.status !== 200) { 
          throw new Error(resp.statusText);
        }
        console.log('b');
        return resp.json();
      })
      .then(data => console.log('c', data))
      .catch(errors => console.log('d', errors))

      console.log('e');

    // a, e, d
  };

  render() {
    return (
      <div>
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
        <button onClick={this.incrementCounter}>Click Me!</button>
        {this.state.counter}
      </div>
    );
  }
}
