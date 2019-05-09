var express = require('express');
var burgerModel = require("../models/burgerModel.js");
var router = express.Router();

router.get('/', function (req, res) {
    burgerModel.getAllBurgers(function(data) {
    var burgerObj = {
        burgers: data
    }
    response.render("index", burgerObj)

})
})

router.get('/about', function (req, res) {
    res.send('About birds')
})
  
module.exports = router;

// [ RowDataPacket { 
//         id: 1, 
//         burger: 'Bacon Cheeseburger', 
//         eaten: 0 
//     } ]