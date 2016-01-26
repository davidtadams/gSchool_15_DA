require("dotenv").load();
var app = require('express')();
var express = require("express");
var http = require('http').Server(app);
var socketIo = require('socket.io');
var socketio_jwt = require('socketio-jwt');
var jwt = require('jsonwebtoken');
var io = require('socket.io')(http);
var bodyParser = require("body-parser");
var session = require("cookie-session");

var jwt_secret = process.env.JWT_SECRET;

var db = require("./models");
var loginMiddleware = require("./middleware/login");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  name: "chocolate chipz"
}));

app.use(loginMiddleware);

app.get('/', function(req,res){
  res.redirect('/login');
});

app.get('/signup' ,function(req,res){
  res.render('signup');
});

app.get('/login', function(req,res){
  res.render('login');
});

app.post("/signup", function (req, res) {
  var newUser = req.body.user;
  db.User.create(newUser, function (err, user) {
    if (user) {
      req.login(user);
      res.redirect("/");
    } else {
      console.log(err);
      res.render("signup");
    }
  });
});

app.get('/logout', function(req,res){
  req.logout("/");
  res.redirect("/");
});

app.post('/login', function (req, res) {

  db.User.authenticate(req.body.user,
   function (err, user) {
    if (err) {
      res.status(400).send(err);
    }
     else if (!err && user !== null) {
       req.login(user);
       var token = jwt.sign(user, jwt_secret, { expiresInMinutes: 60 });
       res.json({token: token});
     } else {
       res.status(500).send("Something went wrong...");
     }
   });
});

io.use(socketio_jwt.authorize({
  secret: jwt_secret,
  handshake: true
}));

io.on('connection', function (socket) {
    console.log(socket.decoded_token.username, 'connected');
    socket.on('message', function(message){
      io.emit("data", message, socket.decoded_token.username);
    });
  });



http.listen(3000, function(){
  console.log('listening on port 3000');
});