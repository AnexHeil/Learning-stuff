var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home.ejs");
})
app.get("/posts", function (req, res) {
    var posts = [
            {title: "post1", author: "Suzie"},
            {title: "Bunny", author: "Jack"},
            {title: "Poppy", author: "Daniel"},
            {title: "Pumsky", author: "Best"},
    ];

    res.render("posts.ejs", {posts: posts})
})
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})
app.listen("3000", function(){
    console.log("Started!");
});
 
 