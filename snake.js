function Snake(numberOfRows) {
  this.headPosition = [] // TODO: fill in based on number of rows
  this.direction = "right", // starts going to the right, but can be changed via this.direction.
  this.body = [] // represents Snake's body through pairs of arrays which will be colored depending on divs
  // TODO: fill in this.body, which should start with the head position
}

Snake.prototype.moveForward = function() {
  // add on to the front of the snake body with the transform of whatever direction it's going
  // remove the last array pair in the body
}


Snake.prototype.offBoard = function(){ // function to check if off the current board.

  // Will have to change logic here
  if(snake.headPosition[0] > 20 || snake.headPosition[0] < 20){ // change to X/Y in future.
    return true
  } else if(snake.headPosition[1] > 20 || snake.headPosition[1] < 20) {
    return true
  } else {
    return false
  }
}
