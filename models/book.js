var mongoose = require('mongoose');

// Genre Schema
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	author: {
		type: String,
		required: true
	},
	publisher: {
		type: String
	},
	image_url: {
		type: String
	},
	buy_url: {
		type: String
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

// Books object to be accesible anywhere
var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books data
// getBooks-->(function)
// callback-->(enter to the route file)
// limit-->(document to be display)
// the mongodb schema
module.exports.getBooks = function(callback, limit){
	// pass what comes to the parameters
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback){
	// pass what comes to the parameters
	// findById a mongoose method
	Book.findById(id, callback);
}

module.exports.addBook = function(book, callback){
	Book.create(book, callback);
}


