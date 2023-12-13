const express = require("express");
const app = express();
const cors = require('cors')
port = 3000;

app.use(cors())
app.use(express.json());

let todos = [];
let id = 0;

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.get("/todos/:id", (req, res) => {
  let todoid = parseInt(req.params.id, 10);
  let found = todos.find((todo) => todo.id === todoid);
  if (!found) {
    res.status(404).json({ message: "todo Not found" });
  } else {
    res.status(200).json(found);
  }
});

app.post("/todos", (req, res) => {
  let newtodo = {
    title: req.body.title,
    description: req.body.description,
    id: id++,
    completed: false,
  };
  todos.push(newtodo);
  res.status(201).json(newtodo);
});

app.put('/todos/:id',(req,res)=>{
    todoid = parseInt(req.params.id)
    found = todos.find(todo => todo.id === todoid)
    if(!found){
        res.status(404).json({message:"todo not found"})
    }
    else{
        found.title = req.body.title
        found.description = req.body.description
        res.status(200).json({message:"todo edited successfully"})
    }
})

app.delete('/todos/:id',(req,res) => {
    let todoid = parseInt(req.params.id)
    found = todos.findIndex(todo => todo.id === todoid)
    if(!found){
        res.status(404).json({message:"todo not found"})
    }
    else{
        todos.splice(found,1)
        res.status(200).json({message:'todo deleted successfully'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
