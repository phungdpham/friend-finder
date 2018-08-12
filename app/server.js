//DEPENDENCIES
//SERIES OF npm packages

var express = require('express');
var bodyParser = require('body-parser');

//creating "express" server
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})