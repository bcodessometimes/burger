var express = require('express');
var burgerModel = require("../models/burgerModel.js");
var router = express.Router();

router.get('/', function (req, res) {
    burgerModel.getAllBurgers(function(data) {
        console.log(data, "this is the function from controller and the data is the data co,ing back from our db");
        res.end();
    })
})

router.get('/about', function (req, res) {
    res.send('About birds')
})
  
module.exports = router;
