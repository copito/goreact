import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    var newValue = counter + 1;
    setCounter(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{counter}</p>
        <button
          style={{ height: "40px", width: "100px" }}
          onClick={() => increaseCounter()}
        >
          Click to add
        </button>
      </header>
    </div>
  );
}

export default App;
