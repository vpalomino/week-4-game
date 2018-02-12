// global variables
var winCounter = 0;
var lossCounter = 0;
var randomNumber;
var yourScore;
var blueNumber;
var yellowNumber;
var greenNumber;
var redNumber;



$(function(){

// set values at the start of each game
function startGame() {

	yourScore = 0;
	$("#score").text(yourScore);
	
	randomNumber = getRandomNumberForMinMaxRange(18, 100);
	$("#randomNumber").text(randomNumber);
	blueNumber = getRandomNumberForMinMaxRange(1, 10);
	yellowNumber = getRandomNumberForMinMaxRange(1, 10);
	greenNumber = getRandomNumberForMinMaxRange(1, 10);
	redNumber = getRandomNumberForMinMaxRange(1, 10);

}

window.onload = function() {
	startGame();
	$("#wins").text(winCounter);
	$("#losses").text(lossCounter);
}

$("#big").click(function(){
	$("#clickCrystal").get(0);
	addValueCheckTotal(blueNumber);
});

$("#little").click(function(){
	$("#clickCrystal").get(0);
	addValueCheckTotal(yellowNumber);
});

$("#giant").click(function(){
	$("#clickCrystal").get(0);
	addValueCheckTotal(greenNumber);
});

$("#tiny").click(function(){
	$("#clickCrystal").get(0);
	addValueCheckTotal(redNumber);
});


// function to give random number
function getRandomNumberForMinMaxRange (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addValueCheckTotal(value) {
	yourScore += value;
	$("#score").text(yourScore);

	if (yourScore === randomNumber) {
		$("#winsound").get(0).play();
		winCounter++;
		$("#wins").text(winCounter);
		startGame();
		return;
	}

	if (yourScore > randomNumber){
		$("#losesound").get(0);
		lossCounter++;
		$("#losses").text(lossCounter);
		startGame();
	}
}

});
