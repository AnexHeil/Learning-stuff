var button = document.querySelector("button");
var body = document.querySelector("body");
function colorToogle (){
        body.classList.toggle("purple")
}
button.addEventListener("click", colorToogle);