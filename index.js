import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./TODO API/config/todo.js"
import Todo from "./TODO API/models/todo.js"
configDotenv()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    Todo.find({})
    .then((err, task) => {
         res.render('home', {
            title: "Home",
            todo: task
        })})
        .catch((err) => {
            console.log('Error in fetching tasks from connectDB');
            return;
        });
});

app.post('/create-todo', (req, res) => {
      
      Todo.create({
          task: req.body.task,
          description: req.body.description,
          date: req.body.date
          }, function(err, newtodo){
          if(err){console.log('error in creating task', err); return;}
          
            return res.redirect('back');
  
      });
  });

app.listen(port, async() => {
    await(connectDB)
    console.log(`Server currently running on port ${port}`)
} )