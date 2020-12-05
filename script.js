var number = document.getElementById("number");
var squares = document.getElementsByClassName("square");
var nextNum = document.getElementById("next");

//global variables
var currentNum = 0; //random number to find
var numbers = [];  //numbers on board
var pickedNumbers = []; //
var clickedSqaures = [];


for(var i = 0; i < squares.length; i+=1){
  var addNum = randomInt(1, 50);
  while(checkArray(addNum, numbers)){
    addNum = randomInt(1, 50);
  }
  numbers.push(addNum);
  squares[i].innerHTML = addNum;
  console.log(numbers)
}
//Display Random Number
pickRandomNumber();
nextNum.onClick = nextNumButton;

//call click square function
for(var i = 0, i < squares.length; i++;){
	squares[i].onClick = clickSquare;
}

//function for clicking square
function clickSquare(){
	if(parseInt(this.innerHTML) == currentNum){
		this.style.backgroundColor = "yellow";
		clickedSquares.push(this.id);
		console.log(clickedSquares);
		checkWin();
		pickRandNum();

	}
}


function randomInt(min, max){
  return Math.floor(Math.random() * (max-min)) + min;
}

function checkArray(n, a){
  for(var i = 0; i < a.length; i+=1){
    if(n == a[i]){
      return true;
    }
  }
  return false;
}
