import logo from "./logo.svg";
import "./App.css";
import FancyButton from "./Child";
import { createRef } from "react";

function App() {
  const ref = createRef(null);
  return (
    <div className="App">
      <FancyButton ref={ref}>add</FancyButton>
      <button onClick={()=>ref.current.child()}>click child</button>
    </div>
  );
}

export default App;
