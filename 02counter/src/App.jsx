import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(15);

  const addValue = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const removeValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Hitesh React Course</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <p>Footer : {count}</p>
    </>
  );
}

export default App;
