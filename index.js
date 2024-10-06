
const { connection } = require("express")
require("./connection")
var empModel = require("./model/employee")
var express = require('express');


var app = express();

//mid
app.use(express.json())

//api
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})
  
//add data to database
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "Data Added" })
    } catch (error) {
        console.log(error)
    }
})

//view data in database
app.get("/view", async (req, res) => {
    try {
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

//update data in db
app.put('/edit/:id', async (req, res) => {
    try {
        var data = await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "Data Updated"})
    } catch (error) {
        console.log(error)
    }
    
})

//delete data from db
app.delete('/delete', async (req, res) => {
    try {
        var data = await empModel.findByIdAndDelete(req.body.id)
        res.send({ message: "Data Deleted" })
    } catch (error) {
        console.log(error)
    }
})

//connect to a port
app.listen(3000, () => {
    console.log('Server is running on port 3000')
    })  //server is running on port 3000