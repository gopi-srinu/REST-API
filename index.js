const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const model = require('./schema');

app.use('/', (req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
})

const dbURL = "";
mongoose.connect(dbURL).then((connection) => {
  app.listen(3000, 'localhost', () => { console.log('Server up and running!'); })
  console.log("Connection Successfull");
}).catch((error) => {
  console.log(error);
})

app.get('/', (req, res) => {
  res.send("Welcome to Base Page!");
})

app.get('/tasks', (req, res) => {
  model.find().then((drivers) => {
    res.send(drivers);
  }).catch((error) => {
    res.send(error);
  })
})

app.get('/tasks/:name', (req, res) => {
  const { taskNameRegex } = req.params.name;
  model.findOne({ name: taskNameRegex }).then((searchedDriver) => {
    res.send(searchedDriver);
  }).catch((error) => {
    res.send(error);
  })
})

app.post('/tasks/newTask', (req, res) => {
  const newDriver = new model(req.body);
  newDriver.save().then((savedResponse) => {
    res.send({ message: 'Data uploaded successfully' });
    console.log(savedResponse);
  }).catch((error) => {
    res.send(error);
  })
})

app.delete('/tasks/:name', (req, res) => {
  const { taskTobeDeleted } = req.params.name;
  console.log("task", taskTobeDeleted);
  model.findOneAndDelete({ taskTobeDeleted }).then((taskDeleted) => {
    console.log("taskDeleted", taskDeleted);
    if (taskDeleted) {
      res.status(200).send({message: 'Task Deleted Successfully!'})
    } else {
      res.status(400).send(`Task not Found with the name ${taskTobeDeleted}`);
    }
  }).catch((error) => {
    console.log("Error deleting the task element", error);
    res.status(500).send({ message: "Internal server error" });
  })
});


app.put('/tasks/:name', (req, res) => {
  const taskUpdatedinformation = req.body;
  const newTaskName = req.params.name;
  model.findOneAndUpdate({taskName: newTaskName}, {$set: taskUpdatedinformation}, {new: true}).then((updatedTaskinformation) => {
    console.log(updatedTaskinformation);
    res.status(200).send('Task updated Successfully')
  }, (error) => {
    console.log(error);
    res.status(404).send('Task not updated', error)
  })
})
