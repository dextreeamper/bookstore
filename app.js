 // Include express, body-parser and mongoose
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Initialize body parser
app.use(bodyParser.json());

// Include the Model File from models
Genre = require('./models/genre.js');
Book = require('./models/book.js');
 
// Connect to mongodb using Mongoose
// mongodb is the root file name
// localhost:27017 are the mongodb server
// bookstore are the name of db
mongoose.connect('mongodb://localhost:27017/bookstore');

// Check if there is connection and do something if not.
mongoose.connection.once('open', function(){
						console.log('Connection is established.')
				})
				.on('error', function(error){
						console.log('Connection error: ', error);
				});

// connect the db using mongoose
var db = mongoose.connection;

// creating route '/' for homepage
app.get('/', function(req, res){
	res.send("Hello World!");
});

app.listen(3000);
console.log('Running on port 3000...');