const router = require('express').config()

router.get('/', function(req,res){

    res.send("GET/places")
})
module.exports = router