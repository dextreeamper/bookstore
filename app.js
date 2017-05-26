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

// get all genres document
app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

// post request, add genres document
app.post('/api/genres', function(req, res){
	// request body parser
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

// put request, update genres document
app.put('/api/genres/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

// get all books document
app.get('/api/books', function(req, res){
	Book.getBooks(function(err, books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});

// get the specific book by id
app.get('/api/books/:_id', function(req, res){
	Book.getBookById(req.params._id,function(err, book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

// creating route '/' for homepage
app.get('/', function(req, res){
	res.send("Hello World!");
});

app.listen(3000);
console.log('Running on port 3000...');
