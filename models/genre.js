var mongoose = require('mongoose');

// Genre Schema
var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

// Genre object to be accesible anywhere
var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres data
// getGenres-->(function)
// callback-->(enter to the route file)
// the mongodb schema

// Get All Genre
module.exports.getGenres = function(callback, limit){
	// pass what comes to the parameters
	Genre.find(callback).limit(limit);
}

// Add Genre
// genre object
module.exports.addGenre = function(genre, callback){
	// pass what comes to the parameters
	Genre.create(genre, callback);
}

// Update Genre
module.exports.updateGenre = function(id, genre, options, callback){
	// initialize the id and property name
	var query = {_id: id};
	var update = {
		// assign the field
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, genre, callback);
}