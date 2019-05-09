var express = require("express");
var exphbs  = require('express-handlebars');

var PORT = process.env.PORT || 3000;
var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require("./controllers/controller.js")

app.use(routes);

app.listen(PORT, function() {
    console.log("Server is running on " + PORT);
});

