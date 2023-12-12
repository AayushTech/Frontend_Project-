function Todoinput({ todos, setTodos }) {
  return (
    <>
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
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setTodos([...todos, data]);
            });
        }}
      >
        Submit
      </button>
    </>
  );
}

export default Todoinput;
