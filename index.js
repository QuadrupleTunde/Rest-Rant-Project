require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// passing
app.use(express.urlencoded({ extended: true }))

// method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

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

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )