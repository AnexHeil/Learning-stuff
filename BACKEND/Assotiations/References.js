var mongoose = require("mongoose");

mongoose.connect("mongodb://localgost:27017/blog_demo_2", {useNewUrlParser: true});

var postSchema = new mongoose.Schema({
    title: String,
    content: String
})
var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})

var User = mongoose.model("User", userSchema);