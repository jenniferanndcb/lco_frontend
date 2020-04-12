import React from "react";
import Title from "./components/Title";
import ChartsContainer from "./containers/ChartsContainer";
import LondonProgrammesContainer from "./containers/LondonProgrammesContainer";


function App() {
  return (
    <div className="App">
      <Title />
      <ChartsContainer />
      <LondonProgrammesContainer />
    </div>
  );
}

export default App;
