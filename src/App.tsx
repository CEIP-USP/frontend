import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Vinicius(props: { message: string; outraCoisa: string }) {
  const [state, setState] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setState(state + 1)}>+</button>
      </div>

      <div> {state}</div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Vinicius message="teste" outraCoisa="testando" />
      </header>
    </div>
  );
}

export default App;
