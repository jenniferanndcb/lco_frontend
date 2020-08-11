import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title";
import ChartsContainer from "./containers/ChartsContainer";
import Masthead from "./components/Masthead";
import Widget from "./containers/Widget";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <Masthead />
        <Route exact path="/" component={Title} />
        <Route exact path="/data" component={ChartsContainer} />
        <Route exact path="/healthyeating" component={Widget} />
      </div>
    </Router>
  );
}

export default App;
