import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  let addValue = () => {
    setCounter(counter >= 20 ? counter : counter + 1);
  };

  let removeValue = () => {
    setCounter(counter > 0 ? counter - 1 : counter);
  }

  return (
    <>
      <h1>Chai aur Code</h1>

      <p>Counter : {counter}</p>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
