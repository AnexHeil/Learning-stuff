var express = require("express"); 
var app = express();
var body_parser = require("body-parser");
var mongo = require("mongoose");
var methodOverride = require("method-override");
var expressSenitizer = require("express-senitizer");
mongo.connect("mongodb://localhost:27017/BlogApp", { useNewUrlParser: true });
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended: true}));
app.use(expressSenitizer());
app.use(methodOverride("_method")); 


var blogSchema = mongo.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongo.model("Blog", blogSchema)

app.get("/", function(req, res){
    res.redirect("/blogs");
})

app.get("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.find({},function(err, blogs){
        if(err){
            console.log("Something went wrong");
        }
        else{
            res.render("index.ejs", {blogs: blogs});
        }
    })
})
app.post("/blogs", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, blog){
        if(err){
            console.log("Something went wrong");
        }
        else{
            console.log("Added a post");
            console.log(blog);
            res.redirect("/blogs");
        }
    })
})
app.get("/blogs/new", function(req, res){
    res.render("new.ejs");
})


app.get("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findById(req.params.id, function(err, blog){
        if(err){
            console.log("Something went wrong");
        }
        else{
            res.render("show.ejs", {blog: blog});
        }
    });
})

app.get("/blogs/:id/edit", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("edit.ejs", {blog: foundBlog});
        }
    })
})

app.put("/blogs/:id", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blog");
        }
        else{
            res.redirect("/blogs/" + req.params.id);
        }
    })
})

app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        res.redirect("/blogs");
    });
})
app.listen("3000", function(){
    console.log("Started!");
})