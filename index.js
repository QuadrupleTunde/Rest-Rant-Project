require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', function(req, res){
    //res.send("Hello World")
    res.render("home")
})

app.use('/places', require('./Controller/places.js'))
app.get('*', function(req, res){
    res.status(404).send("<h1>404 Page</h1>")
})


app.listen(process.env.PORT, function(){

    console.log("Im listening at 3000")
})