
var colors = generateRandomNumbers(6);
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newgame = document.getElementById("new game");
var difficulty = "hard";
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");


colordisplay.textContent = pickedColor;

for (var i=0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        if(clickedColor == pickedColor){
            messageDisplay.textContent = "Correct!";
            newgame.textContent = "Play Again?"
            changeColors(pickedColor);
            h1.style.background = pickedColor;
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    })
}

newgame.addEventListener("click",function(){
    if(difficulty == "hard"){
        colors = generateRandomNumbers(6);
    }
    else{
        colors = generateRandomNumbers(3);
    }
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    for(var i=0; i<colors.length;i++){
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    newgame.textContent = "New Colors";
})

easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    colors = generateRandomNumbers(3);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    difficulty = "easy";
    for(var i=0; i<colors.length;i++){
        squares[i].style.background = colors[i];
    }
    for(var i=3; i< 6;i++){
        squares[i].style.display = "none";
    }
})

hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    colors = generateRandomNumbers(6);
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    difficulty = "hard";
    for(var i=0; i<colors.length;i++){
        squares[i].style.background = colors[i];
    }
    for(var i=3; i< 6;i++){
        squares[i].style.display = "block";
    }
})


function changeColors(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomNumbers(num){
    var arr = [];
    for (var i=0; i< num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}