require('dotenv').config()
const express = require('express')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// passing
app.use(express.urlencoded({ extended: true }))

// public
app.use(express.static('public'))


app.get('/', function(req, res){
    //res.send("Hello World")
    res.render("home")
})

app.use('/places', require('./Controller/places.js'))
app.get('*', function(req, res){
    res.render("error404")
})


app.listen(process.env.PORT, function(){

    console.log("Im listening at 3000")
})