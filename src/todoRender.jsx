function TodoRender({ todos, setTodos }) {
  function handleDelete(todoid) {
    fetch("http://localhost:3000/todos/" + todoid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("Delete Done");
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoid));
    });
  }

  return todos.map((todo) => {
    return (
      <div key={todo.id}>
        <span>{todo.title}</span>
        <span>{todo.description}</span>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    );
  });
}

export default TodoRender;
