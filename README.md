# Bookstore
A simple node application that I used mongodb for storing the data and express for creating the basic rest api's. I used moongose for connecting mongodb.

# Quickstart
```
git clone https://github.com/dextreeamper/bookstore.git
cd bookstore
npm install
node app or nodemon
```
# Mongodb
Create database bookstore
```
use bookstore
```
Create and show collection for our model(book and genre)
```
db.createCollection('book');
db.createCollection('genre');
show collections
```
Insert document to our collection genre and book
```
db.genres.insert({name:"Horror"});

db.book.insert({
	"title" : "Title of Book",
	"genre" : "Suspense",
	"description" : "This is a new description added by postman post request.",
	"author" : "Author Sample",
	"publisher" : "Publisher Sample",
	"image_url" : "https://img.thriftbooks.com/api/images/l/33d0d22cc4da5edc668fecc9a7a9d3d6ed0ee443.jpg",
	"buy_url" : "https://www.thriftbooks.com/w/ashes_laurie-halse-anderson/11433674/#isbn=1416961461",
});
```
# API's endpoint
```
Access these endpoints thru postman with 'GET', 'POST' and 'PUT' request
localhost:3000/
localhost:3000/api/genres
localhost:3000/api/genres/:_id
localhost:3000/api/books
localhost:3000/api/books/:_id
```
