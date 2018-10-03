var numberOfSquares = 6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6; 
            resetFunc();
        })
    }
}

function resetFunc(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < colors.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    reset.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    reset.textContent = "New Colors";
}
reset.addEventListener("click", resetFunc);
colorDisplay.textContent = pickedColor;
for (var i = 0; i <squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor)
        {
            message.textContent = "Correct!";
            changeCollors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again"
        }
    });
}
function changeCollors(color){
    for (var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}