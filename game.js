
function Game (){
	this.display = new GameDisplay();
	this.grid = [
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" ", " ", " ", " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
]; 
	/* this.snake = new Snake(); */  
}

Game.prototype.show = function() {
	this.display.showGrid(this.grid);
}

Game.prototype.start = function(){
	$('#9').css("background", "blue"); 
	/* Place new head in center */ 
	/* Place food randomly somewhere on grid */ 
	/* head needs to start moving in a specified direction */ 
}






















var snake = {
	headPosition: [10,10], // head position must be known because this is the one part that actually can "eat" food
	Direction: "right", // starts going to the right, but can be changed via this.direction.
	snakeBody: [[10,10]] // represents Snake's body through pairs of arrays which will be colored depending on divs
}



var offBoard = function(){ // function to check if off the current board.
	if(snake.headPosition[0] > 20 || snake.headPosition[0] < 20){ // change to X/Y in future.
		return true
	} else if(snake.headPosition[1] > 20 || snake.headPosition[1] < 20) {
		return true
	} else {
		return false
	}


}

var eatsItself = function (){

}


var move = function(){
/*
	if(offBoard || eatsItself()){
		gameOver();
	} for later usage. */
	}

	
