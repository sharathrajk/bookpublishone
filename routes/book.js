var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var config = require('../config/database');

//New Company
router.post('/newBook', (req,res,next)=>{
    let newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    });
   
    Book.addBook(newBook, (err, book)=>{
      if(err){
        res.json({success: false, msg:"Failed to Add book content"});
   
      }if(book){
        res.json({success: true, msg:"book added"});
      }
    });
   });

   //get students
router.get('/getBook', function(req, res){
    Book.getBook(function(err, book){
      if(err){
         return res.json({status:false, message:'No book found'});
      }
    res.json({
      success: true,
      book:{book}
    });
    });
    });

    //deleteCompany
    router.post('/delete', (req,res,next)=>{
      
      let id = req.body.id;
     
      Book.deleteBook(id, (err, book)=>{
        if(err){
          res.json({success: false, msg:"Failed to delete book"});
     
        }if(book){
          res.json({success: true, msg:"Book deleted successfully"});
        }
      });
     });


  
  module.exports = router;