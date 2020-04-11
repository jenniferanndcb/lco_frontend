import React from "react";
import Title from "./components/Title";
import ChartsContainer from "./containers/ChartsContainer";
import LPContainer from "./containers/LPContainer";

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
