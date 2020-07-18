var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();// triggered when the page loads
function init(){
	// mode buttons event listeners
	setupMode();
    setupSquares();
    resetButton();
}

function setupMode(){
	for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
      resetButton();
   });
  }
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners tp squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare with pickedColor
		if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct";
           reset.textContent = "Play Again?";
           changeColors(pickedColor);
           h1.style.backgroundColor = pickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

   }
}

function resetButton(){
	//generate all new colors
    colors = generateRandomColors(numberSquares);
	// pick a new random color from array & change color display
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colors";
    messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
	    if(colors[i]){
            squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else{
            squares[i].style.display = "none";// hidden the bottom 3 squares
		}
    }
    h1.style.backgroundColor = "steelblue";
}

reset.addEventListener("click", resetButton);

function changeColors(color){
	// loop through all squares
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array and add num random colors to array
    var arr = [];
    for (var i = 0; i < num; i++){
    	//get random color and push into array
    	arr.push(randomColor());
    }
	//return that array
	return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
 
}