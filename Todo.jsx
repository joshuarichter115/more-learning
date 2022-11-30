import "./Todo.css"

function Todo({title, confirmed}) {
    
  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={confirmed}>Delete</button>
    </div>
  );
}

export default Todo;
