const express = require('express')
const router = express.Router()
const places = require('../models/places')
const db = require('../models')

// index
router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=>{
    res.render('places/index', {places})
  }) 
   .catch(err=>{
     console.log(err)
     res.render('error404')
   })
 
})

// create
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(()=>{
    res.redirect('/places')
  })
  .catch(err=>{
  if (err && err.name == 'ValidationError') {
    let message = 'Validation Error: '
      for(var field in err.errors){
        message += `${field} was ${err.errors[field].value}.`
        message += `${err.errors[field].message}`
      }
      console.log("Validation error message", message)

    res.render('places/new', { message })
}
else {
    res.render('error404')
}
  
})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

// show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
// edit
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
.then(places=>
  {res.render('places/edit', {place:  places[id], id})
})
.catch(err => {
  console.log('err', err)
  res.render('error404')
})
})

//  update
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id)
  .then(updatePlace=>{
      console.log('updatePlace', updatePlace)
      res.redirect(`/places/${id}`)
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
  
})

// delete
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id) 
    .then(deletePlace => { 
      res.status(303).redirect(`/places/${id}`)
   
})
.catch(err=>{
  console.log(err)
  res.sendStatus(404)
})
})

module.exports = router