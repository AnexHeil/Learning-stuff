var express       = require("express"),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    bodyPasrer    = require("body-parser"),
    LocalStrategy = require("passport-local");
    passportLocalMongoose = require("passport-local-mongoose");
var app = express();

var User = require("./models/user");

mongoose.connect("mongodb://localhost:27017/AuthAppDemo", {useNewUrlParser: true});
app.use(bodyPasrer.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "AnexHeil",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ROUTES


app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/secret", isLoggedIn(),  function(req, res){
    res.render("secret.ejs")
})


app.get("/register", function(req, res){
    res.render("register.ejs");
})
app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            res.render("register.ejs");
        }
        else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            });
        }
    })
})

app.get("/login", function(req, res){
    res.render("login.ejs")
})
app.post("/login", passport.authenticate("local",{
        succesRedirect: "/secret",
        failureRedirect: "/login"
    }) ,function(req,res){
})

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
})
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}
app.listen("3000", function(){
    console.log("Started");
}) 