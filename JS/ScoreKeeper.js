var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2 ");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var p1Display = document.getElementById("p1Display")
var p2Display = document.getElementById("p2Display")
var num = document.querySelector("input");
var p = document.querySelector("#score");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
p1Button.addEventListener("click", function(){
    if (!gameOver)
    {
        p1Score++;
        if (p1Score === winningScore)
        {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
    p1Display.textContent = p1Score;
})
p2Button.addEventListener("click", function(){
    if (!gameOver)
    {
        p2Score++;
        if (p2Score === winningScore)
        {
            p1Display.classList.add("winner");
            gameOver = true;
        }
    }
    p2Display.textContent = p2Score;
})
resetButton.addEventListener("click", function(){
    reset();
})
num.addEventListener("change", function(){
    p.textContent = num.value;
    winningScore = Number(num.value);
    reset();
})
function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

