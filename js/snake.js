$.getScript("js/extensions.js", function(){
  console.log('extensions.js loaded'); 
}); 

function Snake(numberOfRows) {
  this.headPosition = [numberOfRows/ 2, numberOfRows /2] // TODO: fill in based on number of rows
  this.direction = "right", // starts going to the right, but can be changed via this.direction.
  this.body = [[this.headPosition[0], this.headPosition[1]]] // represents Snake's body through pairs of arrays which will be colored depending on divs
  // TODO: fill in this.body, which should start with the head position
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

Snake.prototype.ateFood = function(foodLocation){
  if(foodLocation.equals(this.headPosition)){
    return true;
  }
  else{
    return false; 
  } // this logic may have to be changed as movement is introduced!
}

Snake.prototype.getBody = function(){
  return this.body;   
}


Snake.prototype.offBoard = function(){
 // function to check if off the current board.
  if(this.body[0][0] > 20|| this.body[0][0] < 0){ // change to X/Y in future.
    return true
  } else if(this.body[0][1] > 20 || this.body[0][1] < 0) {
    return true
  } else {
    return false
  }
}

Snake.prototype.ateItself = function(){
  var snakeBody = this.body; 
  var snakeHead = this.headPosition; 

 for(var i=1; i < snakeBody.length; i++){
  if(snakeHead.equals(snakeBody[i])){
    return true 
    } // goes through each array except the head, compares the two
    // if the head ever equals any of the body, this function will return true
  }

  return false     // if it goes through the loop and never executes, then it returns false.


 }

