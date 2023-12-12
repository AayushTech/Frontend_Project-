import { useState, useEffect } from "react";

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
      Title
      <input id="title" type="text" />
      <br />
      <br />
      Descrition
      <input id="description" type="text" />
      <br />
      <button
        onClick={() => {
          let title = document.getElementById("title").value;
          let description = document.getElementById("description").value;
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }}
      >
        Submit
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            <button>Delete</button>
          </div>
        );
      })}
      <br />
    </>
  );
}

export default App;
