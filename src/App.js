import React from "react";
import PostcodeForm from "./components/AreaDropdown";
import Title from "./components/Title";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="App">
      <Title />
      <PostcodeForm />
      <Charts />
    </div>
  );
}

export default App;
