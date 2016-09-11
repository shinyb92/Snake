function Snake(numberOfRows) {
  this.headPosition = [numberOfRows/ 2, numberOfRows /2] // TODO: fill in based on number of rows
  this.direction = "right", // starts going to the right, but can be changed via this.direction.
  this.body = [[this.headPosition[0], this.headPosition[1]]] // represents Snake's body through pairs of arrays which will be colored depending on divs
  // TODO: fill in this.body, which should start with the head position
}

Array.prototype.findAndReplace = function(currentIndex, item){
 this.splice(currentIndex, 0, item); // places our new item in the array at the passed-in index.
 var previousElement = currentIndex + 1; // basically this code captures what our previous "non-transformed" array was. It's always going to get pushed one element forward in the array. This code grabs the index of that element.
 this.splice(previousElement, 1); // removes previous element. 
}  

Array.prototype.equals = function(otherArray){
  if(this.length !== otherArray.length){
    return false;
  }
  for(var i=this.length; i--;){
    if(this[i] !== otherArray[i]){
      return false;
    }

  }
  return true; 
}

Array.prototype.change = function(snakeDirection){
  switch(snakeDirection){
    case 'right':
      return [this[0], this[1]+=1]
      break; 
    case 'left':
      return [this[0],this[1] -= 1] 
      break;
    case 'up':
      return[this[0] -= 1, this[1]]
      break;
    case 'down':
      return [this[0] += 1, this[1]]
      break;
  }

} /* This function is meant to take in a piece of the snake body. 
and then transform it properly depending on the direction fed into the function. 
So if you have something moving right, it's final product should be [10,10] --> [10,11]
from this function */ 

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

