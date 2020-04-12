import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ChartsContainer from "./containers/ChartsContainer";
import LondonProgrammesContainer from "./containers/LondonProgrammesContainer";
import Masthead from "./components/Masthead";

function App() {
  return (
    <Router>
      <div className="App">
        <Masthead />
        <Navbar />
        <Route exact path="/" component={Title} />
        <Route exact path="/data" component={ChartsContainer} />
        <Route exact path="/programmes" component={LondonProgrammesContainer} />
      </div>
    </Router>
  );
}

export default App;
