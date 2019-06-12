//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//set static ss and js files
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("form");
});

app.post("/", function(req,res){
  const name = req.body.fullName;

  res.render("sucess", {Name: name});
});







app.listen(3002, function(){
  console.log("Server started running on port 3002.");
});
