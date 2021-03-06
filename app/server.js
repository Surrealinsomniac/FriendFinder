var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./routing/htmlRoutes")(app);

require("./routing/apiRoutes")(app);




app.listen(PORT, function() {
    console.log("APP LISTENING ON PORT: " + PORT);
})