import "./Counter.css";
import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1)
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <div className="counterContainer">
      <button className="buttonMinus inCounter" onClick={decrementCounter}>-</button>
      {counter}
      <button className="buttonPlus inCounter" onClick={incrementCounter}>+</button>
    </div>
  );
}

export default Counter;