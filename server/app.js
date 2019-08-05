const express = require('express')
const app = express() 
const cors = require('cors')
const bodyParser = require('body-parser')

// app.use means we are passing a middleware 
app.use(cors())
app.use(bodyParser.json())
app.use(function(req,res,next) {
    console.log("MIDDLWARE")
    next() 
})


app.get('/',(req,res) => {
    res.send("Hello World!")
})

// localhost:3000/todos (GET)
app.delete('/todos',(req,res) => {

})

// localhost:3000/todos (POST)
app.post('/todos',(req,res) => {
    let taskName = req.body.taskName
    let priority = req.body.priority
    console.log(taskName)
    console.log(priority)
    res.send("Got it!")
})

// localhost:3000/todos (GET)
app.get('/todos',(req,res) => {
    let tasks = [{name: 'Wash the car'},{name: 'Feed the dog'}]
    res.json(tasks)
})

//console.log(app)

app.listen(3000,() => {
    console.log("Server has started..")
})