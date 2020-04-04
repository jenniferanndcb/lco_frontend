import React from "react";
import PostcodeForm from "./components/PostcodeForm";
import Title from "./components/Title";
import Text from "./components/Text"
import Charts from "./components/Charts";

function App() {
  return (
    <div className="App">
      <Title />
      <Text />
      <PostcodeForm />
      <Charts />
    </div>
  );
}

export default App;
