//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');

//set static ss and js files
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("form");
});

app.listen(3002, function(){
  console.log("Server started running on port 3002.");
});
