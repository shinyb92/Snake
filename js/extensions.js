Array.prototype.contains = function(desiredArray){
  var currentElement;


  for(i=0; i < this.length;i++){ // for the length of parent array
    if(desiredArray.length === this[i].length){
      currentElement = this[i];
      for(j=0;j<desiredArray.length && desiredArray[j] == currentElement[j]; j++);
        if(j === desiredArray.length)
          return true;   
    }
  }
  return false; 
} // little function to check whether an element is included in an array.

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
} // function checks if two arrays are equivalent, since javascript doesn't compare arrays side by side naturally. 




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