var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var header = document.querySelector("#header");
var newColorsButton = document.getElementById("newColorsButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;


easyBtn.addEventListener("click", function (){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function (){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!!";
            newColorsButton.textContent = "Play Again?";
            changeColors(clickedColor);
            header.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again!"
        }
    })
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
    //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

newColorsButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    header.style.backgroundColor = "rgb(115, 255, 0)";
    newColorsButton.textContent = "New Colors?"
    messageDisplay.textContent = " ";
})