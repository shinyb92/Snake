Snake.prototype.move = function(currentDirection,previousDirection) {
  var snakeBody = this.body; // grabs body
  var snakeHead = snakeBody[0]; // assigns value of first array or "head"

for(var i=0;i<snakeBody.length; i++){
  if(snakeBody[i][0] === snakeHead[0] || snakeBody[i][1] === snakeHead[1]){
    var newLocation = snakeBody[i].change(currentDirection) 
    snakeBody.findAndReplace(i, newLocation);
  }
  else{
    var newLocation = snakeBody[i].change(previousDirection)
    snakeBody.findAndReplace(i, newLocation);
  }
} // so for the length of the snake, take each transform, find and replace it within the body.

  this.headPosition = snakeHead;  // assign new headPosition to the first element in the array. 


}


 
