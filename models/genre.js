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
