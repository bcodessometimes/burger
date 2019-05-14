var express = require('express');
var burgerModel = require("../models/burgerModel.js");
var router = express.Router();

router.get('/', function (req, res) {
    burgerModel.getAllBurgers(function(data) {
    var burgerObj = {
        burgers: data
    }
    res.render("index", burgerObj)
    });
});

router.post("/api/burgers", function (req, res) {
    burgerModel.postBurgers(function(data) {
        res.end();
})
})

router.put('/api/burger/:id', function (req, res) {
    res.send('About birds')
})


router.delete('/api/burger/:id', function (req, res) {
    res.send('About birds')
})
  
module.exports = router;

// [ RowDataPacket { 
//         id: 1, 
//         burger: 'Bacon Cheeseburger', 
//         eaten: 0 
//     } ]