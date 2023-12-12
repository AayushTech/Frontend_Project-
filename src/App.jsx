import { useState, useEffect } from "react";
import Todoinput from "./todoinput";
import TodoRender from "./todoRender";

function App() {
  let [todos, setTodos] = useState([]); // state variable

  useEffect(() => {
    fetch("http://localhost:3000/todos", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      });
  }, []);

  return (
    <>
      <h1>Todo List</h1>

      <Todoinput todos={todos} setTodos={setTodos} />

      <TodoRender todos={todos} setTodos={setTodos} />

      <br />
    </>
  );
}

export default App;
