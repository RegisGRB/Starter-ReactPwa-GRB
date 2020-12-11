import React from "react";

const TodoList = () => {
  const [Todos, setTodos] = React.useState([]);
  const [Title, setTitle] = React.useState("");
  const [Priority, setPriority] = React.useState(0);
  const submit = (e) => {
    e.preventDefault();
    setTodos([...Todos,{Title:Title,Priority:Priority}])
  };
  const deleteTodo = id =>{
      const refresh =Todos.filter(todo => TodoItem.id !== id );
      setTodos(refresh);
  }
  return (
    <div>
      <h1 className="Title">TodoList</h1>
      <form onSubmit={submit}>
        <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Title" className="Input White-theme"></input>
        <input type="number" onChange={(e)=> setPriority(e.target.value)} placeholder="Priority" className="Input White-theme"></input>
        <button type="submit" className="Button White-theme">Submit</button>
      </form>
      <ul>
        {Todos.map((el, index) => {
          return (
            <li>
              <TodoItem key={index} element={el} action={deleteTodo}></TodoItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
const TodoItem = props => {
  return (
    <div>
      <h3 className="Title">{props.element.Title}</h3>
      <div className="Delete" onClick={props.action}></div>
    </div>
  );
};

