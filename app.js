var express = require('express');
var path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var config = require('./config/database');

//connect to mongo

//connected to database
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
  console.log('connected to database');
});

var app = express();


const books = require('./routes/book');

const port = 7000;

// CORS middleware
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

//body parser
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb'}));


app.use('/book',books);


// index route
app.get('/', (req,res)=>{
  res.send("add ' /book to get response");
})

 
app.listen(port, () =>{
  console.log('Welcome to book-publish server');
})