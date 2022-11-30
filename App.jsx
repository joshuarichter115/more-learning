import "./App.css";
import Todo from "./components/Todo.jsx"
import Title from "./components/Title.jsx"
import Modal from "./components/Modal.jsx"
import Counter from "./components/Counter"
import ObjectCounter from "./components/ObjectCounter";
import ArrayCounter from "./components/ArrayCounter"
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true);
  }

  function confirmClose() {
    console.log("confirm")
    setShowModal(false);
  }

  function cancelClose() {
    console.log("cancel")
    setShowModal(false);
  }

  return (
    

   <div>
    <Title></Title>
    <div>
      <input type="text" />
      <button onClick={() => setShowModal(true)}>Add ToDo</button>
    </div>
    <div className="todo__wrapper">
      <Todo 
      confirmed={onTodoDelete}
      title="Finish Frontend Simplified"
      ></Todo>
      <Todo 
      confirmed={onTodoDelete}
      title="Finish Interview Section"
      ></Todo>
      <Todo 
      confirmed={onTodoDelete}
      title="Land Dfin Job"
      ></Todo>
    </div>
    {showModal && <Modal 
    title="Confirm Delete?"
    option={cancelClose}
    option1={confirmClose}
     />}
    <Counter></Counter>
    <ObjectCounter></ObjectCounter>
    <ArrayCounter></ArrayCounter>
  </div>
  )


}

export default App;