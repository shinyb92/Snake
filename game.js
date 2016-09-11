function Game (){
	this.display = new GameDisplay();
	this.numberOfRows = 20;
	this.snake = new Snake(this.numberOfRows);
	this.gameSpeed = 150; 
	this.score = 0;	
	this.highScore = 0; 
	this.prevFood
}

var getRandomInt = function(minValue, maxValue){
	return Math.floor(Math.random()*(maxValue-minValue+1)+minValue);
} // Function grabs a random integer between two values. 


Game.prototype.createGrid = function() {
	this.display.createGrid(this.numberOfRows);
}

Game.prototype.updateScore = function(){
	this.display.updateScore(this.score);
}

Game.prototype.placeFoodRandomly = function() {
	this.foodLocation = [getRandomInt(0,this.numberOfRows - 1), getRandomInt(0, this.numberOfRows - 1)] // minus one because it IS 20 rows, but it goes from 0-19
}

Game.prototype.drawGrid = function() {
	this.display.show(this.foodLocation, this.snake.getBody(), this.numberOfRows);
}

Game.prototype.increaseSpeed = function(){
		this.gameSpeed -= 10 
}


Game.prototype.moveSnakeForward = function() {
	var snake = this.snake
	var foodLocation = this.foodLocation 
	var currentDirection = this.snake.direction 
	var snakeGame = this; 


	var ateFood = snake.ateFood(foodLocation);

		if(ateFood){
			snake.body.unshift(foodLocation)
			this.prevFood = foodLocation;
			this.placeFoodRandomly();
			this.score++
			if(this.score > this.highScore){
				this.highScore = this.score
			}	
			this.updateScore();
			if(this.gameSpeed > 80){
				this.increaseSpeed();
				clearInterval(this.gameLoop);
				this.gameLoop = setInterval(function() {
			snakeGame.update();
		}, snakeGame.gameSpeed);
			}
		 }
		else{
			snake.move(currentDirection);
	}
 // maybe pass in if it ate food to avoid popping off the end of the array if it did eat food

}


Game.prototype.checkIfGameOver = function() {
	var snake = this.snake; 

	

	if(snake.ateItself() && !snake.ateFood(this.prevFood)){
	this.stopAndResetGame();
}
else if(snake.offBoard()){
	this.stopAndResetGame();
}

}

Game.prototype.update = function() {
	this.drawGrid();
	this.moveSnakeForward();
	this.checkIfGameOver();
}

Game.prototype.listenForUserInput = function() {

	var snake = this.snake;

 $(document).keydown(function(event){
		var keyPressed = event.which; // this captures the ASCII keycode of whatever button is pressed while on the page. I might change 'document' here to something else.
	
	
//arrow buttons
		var keyUp = 38; // up 
		var keyDown = 40; // down
		var keyLeft = 37; // left
		var keyRight = 39; // right



		// The "If" statements in this switch statement basically don't allow the snake to eat itself. So if you're going left, you can't go immediately right without going up first. It's so you don't accidentally end your game really quickly! 

		switch(keyPressed){

		case keyUp:
			if (snake.direction !== 'down' && snake.direction !== 'up'){
				snake.previousDirection = snake.direction
				snake.direction = 'up'
			}
			break;	
		case keyDown:
			if(snake.direction !== 'up' && snake.direction !== 'down'){
				snake.previousDirection = snake.direction
				snake.direction = 'down'
			}
			break; 
		case keyLeft:
			if(snake.direction !== 'right' && snake.direction !== 'left'){
				snake.previousDirection = snake.direction
				snake.direction = 'left'
			}	
			break; 
		case keyRight:
			if(snake.direction !== 'left' && snake.direction !== 'right'){
				snake.previousDirection = snake.direction
				snake.direction = 'right'
			}	
			break; 
	} 

	});  
} 

Game.prototype.startGameLoop = function() {
	var snakeGame = this;

	snakeGame.gameLoop = setInterval(function() {
		snakeGame.update();
	}, snakeGame.gameSpeed); 

	this.listenForUserInput();
}



Game.prototype.start = function(){
  this.startGameLoop();
  this.placeFoodRandomly();
	

	/* Place new head in center */
	/* Place food randomly somewhere on grid */
	/* head needs to start moving in a specified direction */
}

Game.prototype.stopAndResetGame = function(){
	clearInterval(this.gameLoop);
	this.display = new GameDisplay();
	this.snake = new Snake(this.numberOfRows);
	this.gameSpeed = 150; 
	this.score = 0; 
	this.prevFood = null;
	this.updateScore();
	alert('Oh no! Looks like you lost! Press "Start" again to keep snaking :) Your highest score so far is ' + this.highScore + '. Think you can beat that?!')
}





