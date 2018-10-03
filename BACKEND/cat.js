var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperamet: String
});

var Cat = mongoose.model("cat", catSchema);

// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperamet: "Grouchy" 
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something wrong")
//     }
//     else{
//         console.log("Good, added a cat " +  cat);
//     }
// });
Cat.create({
    name: "Snow White",
    age: 15,
    temperamet: "Bland"
}, 
    function(err, cat){
        if(err){
            console.log("Shit gots real")
        }
        else{
            console.log(cat);
        }
});
Cat.find({}, function(err, cats){
    if (err){
        console.log("Error " + err)
    }
    else{
        console.log("All of the cats");
        console.log(cats);
    }
});
