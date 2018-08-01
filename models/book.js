var mongoose = require('mongoose');
var config = require('../config/database');


//user Schema
var BookSchema = mongoose.Schema({
  title:{type: String, required:true },
  author: { type: String, required: true },
content:{ type: String, required: true },

});

var Book = module.exports = mongoose.model('Book',BookSchema);

 module.exports.addBook =function(newBook, callback){
    newBook.save(callback);
  }

  module.exports.getBook = function(callback, limit){
    Book.find(callback).limit(limit);
  }

  module.exports.deleteBook = function(id,callback){
    Book.remove({_id:id},callback);
  }


