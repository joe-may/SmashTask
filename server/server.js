require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


////////////////////////
// app.get('/todos')


const todoSchema = new mongoose.Schema ({
  title: String,
  complete: {
    type: Boolean,
    default: false
  }
  
})

const Todo = mongoose.model('todo', todoSchema)

app.get("/todos", (req, res) => {
  Todo.find().then(todo => res.json(todo))
})

app.post("/todos", (req, res) => {
  const newTodo = new Todo ({
    title: req.body.title
  })
  newTodo.save().then(todo => res.json(todo))
})

app.delete("/todos/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(()=>res.json({remove:true}))
})






