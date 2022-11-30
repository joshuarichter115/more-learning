import React, { useState } from "react";
import "./ArrayCounter.css"

function ArrayCounter() {
    const [arr, setArr] = useState([]) 
    function addPlus() {
        setArr((prevArr) => [
            ...prevArr,
            "+",
        ]);
    }

    function addMinus() {
        setArr((prevArr) => [
            ...prevArr,
            "-",
        ]);
    }

    return (
        <div className="arrayCounterContainer">
            <button className="arrayCounterButton" onClick={addMinus}>-</button>
            {arr}
            <button className="arrayCounterButton" onClick={addPlus}>+</button>
        </div>
    );
}

export default ArrayCounter;