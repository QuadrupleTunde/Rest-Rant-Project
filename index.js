require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Hello World")
})
app.use('/places', require('./Controller/places.js'))
app.get('*', function(req, res){
    res.status(404).send("<h1>404 Page</h1>")
})


app.listen(process.env.PORT, function(){

    console.log("Im listening at 3000")
})