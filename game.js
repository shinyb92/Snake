function Game (){
	this.display = new GameDisplay();
	this.numberOfRows = 20;
	this.snake = new Snake(this.numberOfRows);
}

Game.prototype.createGrid = function() {
	this.display.createGrid(this.numberOfRows);
}

Game.prototype.placeFoodRandomly = function() {
	this.foodLocation = [this.numberOfRows / 2, this.numberOfRows / 2]
}

Game.prototype.drawGrid = function() {
	this.display.show(this.foodLocation, this.snake.getBody());
}

Game.prototype.moveSnakeForward = function() {
	var ateFood = snake.ateFood(foodLocation); // TODO: // check if the snake's head is where it ate food
	snake.moveForward(ateFood); // maybe pass in if it ate food to avoid popping off the end of the array if it did eat food

}

Game.prototype.checkIfGameOver = function() {
	// check if snake is off the board or touches itself
}

Game.prototype.update = function() {
	this.drawGrid();
	this.moveSnakeForward();
	this.checkIfGameOver();
}

Game.prototype.listenForUserInput = function() {
	// use jquery to listen for key down
	// update the snake direction depending on which key is pushed
}

Game.prototype.startGameLoop = function() {
	var snakeGame = this;

	setInterval(function() {
		snakeGame.update();
	}, 1000);

	this.listenForUserInput();
}

Game.prototype.start = function(){
	$('#9').css("background", "blue");

	this.placeFoodRandomly();
	this.startGameLoop();

	/* Place new head in center */
	/* Place food randomly somewhere on grid */
	/* head needs to start moving in a specified direction */
}





