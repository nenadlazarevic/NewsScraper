var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");



// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_769ptnmx:k2b8bphiso411el2eqdsrmhtc8@ds123645.mlab.com:23645/heroku_769ptnmx",;

mongoose.connect(MONGODB_URI,);
// mongoose.connect("mongodb://localhost/nprNews", { useNewUrlParser: true });

// Routes
const routes = require("./routes");

app.use(routes);


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
