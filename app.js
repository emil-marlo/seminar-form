//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

const infos = [];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//set static ss and js files
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("form");
});

app.post("/", function(req,res){

  const info = {
    name: req.body.fullName,
    email: req.body.email,
    position: req.body.position,
    division: req.body.division,
    department: req.body.dept
  };

  infos.push(info);

  res.render("sucess", {infoName: info.name});
});

app.get("/list", function(req, res){
  res.render("list", {
    infos: infos
  });
});


app.listen(3002, function(){
  console.log("Server started running on port 3002.");
});
