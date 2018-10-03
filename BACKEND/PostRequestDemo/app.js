var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Tony", "Miranda", "Justin", "Lily"];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home.ejs"); 
});

app.get("/friends", function(req, res){
    res.render("friends.ejs", {friends:friends}); 
});


app.post("/addFriend", function(req, res){
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});
app.listen("3000", function(){
    console.log("Started");
});