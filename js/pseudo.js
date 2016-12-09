var snakeBody = this.body; 
var currentDirection = this.direction; 

var rightMove = snakeBody[0][1] += 1; // 
var leftMove = snakeBody[0][1] -= 1;
var upMove = snakeBody[0][0] += 1;
var downMove = snakeBody[0][0] -= 1;

Array.prototype.unPop = function(array){
	this.unshift(array); 
	this.pop();
} /* 
This small function combines unshift and pop 
for arrays. It takes in a desired array or element. 
Then it puts it on the front with unshift. 
Then it pops off the last element of the array. 
*/ 

switch(currentDirection){
	case 'right':
		snakeBody.unPop(rightMove);
		break;
	case 'left':
		snakeBody.unPop(leftMove);
		break;
	case 'up':
		snakeBody.unPop(upMove); 
		break; 
	case 'down':
		snakeBody.unpop(downMove);
		break; 
}

if(snake.ateFood(foodLocation)){
	snake.body.unshift(foodLocation)
	placeFoodRandomly();
}
else{
	snake.move(currentDirection);

}

for(i=snakeBodylength; i--){
	var newLocation = snakeBody[i].change(snakeDirection) 
	snakeBody.findAndReplace(i, newLocation);

}


if(snakeHead[0] == currentBlock[0] || snakeHead[1] == currentBlock[1]){
	moveThatBlock(snakeDirection);
}
else{
	moveThatBlock(ThePreviousDirection)
}


// Change up here 

if(currentElement[0] == elementInFrontOfIt[0] || currentElement[1] == elementInFrontOfIt[1]){
	// transform in the direction last recorded. E.g. The one captured by "previous direction" -- it knows which direction the last element moved, but doesn't use it necessarily.
}

else{
	// transform in the direction it WAS going in. 
}


Array.prototype.findDirection = function(currentArray){
	// Take old array 
	// run it through 'tests'
	// spit out where it "went" or how it transformed itself last. 

	var up = [this[0]-1, this[1]]
	var down = [this[0]+1, this[1]]
	var right = [this[0], this[1]+1]
	var left = [this[0], this[1]-1]

	if(up.equals(currentArray)){
		return 'up'
	}
	else if(down.equals(currentArray)){
		return 'down'
	}
	else if(right.equals(currentArray)){
		return 'right'
	}
	else if(left.equals(currentArray)){
		return 'left'
	}
}


Snake.prototype.move = function(currentDirection,previousDirection) {
  var snakeBody = this.body; // grabs body
  var snakeHead = snakeBody[0]; // assigns value of first array or "head"
  var previousBodyPiece; // The body piece that was last "moved" or the one that is in "front" of the current element
  var previousLocation; // to be assigned in the loop to the value of what the element "was" before being transformed.

for(var i=0;i<snakeBody.length; i++){

	previousBodyPiece = snakeBody[i-1]



  if(snakeBody[i].equals(snakeHead)){
  	previousLocation = snakeBody[i].slice(0,2);
    var newLocation = snakeBody[i].change(currentDirection)
    snakeBody.findAndReplace(i, newLocation);
  }
  else{
  	var newLocation = previousLocation;
  	previousLocation = snakeBody[i].slice(0,2); 
  	snakeBody.findAndReplace(i, newLocation);
  }
   this.headPosition = snakeHead;
} // so for the length of the snake, take each transform, find and replace it within the body.
	
   // assign new headPosition to the first element in the array. 


}
}

Game.prototype.checkIfGameOver = function() {
	var snake = this.snake; 
	var gameOver = false; 

	if(snake.ateItself){
	gameOver = true 
	console.log(gameOver);
}
else if(snake.offBoard){
	gameOver = true
	console.log(gameOver);
}
else{
	gameOver = false
	console.log(gameOver);
}


}

Game.prototype.stopGameLoop = function(){
	

}





