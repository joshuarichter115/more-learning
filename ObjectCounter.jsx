import React, { useState } from "react";
import "./ObjectCounter.css"

function ObjectCounter() {
    const [cart, setCart] = useState({
        item: "apple",
        quantity: 0,
    });

    function addApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    function minusApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity -1,
        }))
    }


    return (
        <div className="objectCounterContainer">
            <button className="objectCounterButton" onClick={minusApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button className="objectCounterButton" onClick={addApple}>+</button>
        </div>
    )
}

export default ObjectCounter;