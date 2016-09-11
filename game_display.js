function GameDisplay() {

}

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
} // function checks if two arrays are equivalent, since javascript doesn't compare objects well.

 GameDisplay.prototype.show = function(foodLocation, snakeBody, numberofRows) {
  
  for (var i=0; i < numberofRows ; i++){
    

    for(var j=0; j < numberofRows; j++){
      var currentSquare = $('#' + i + '-' + j);
      var squareLocation = [i, j];  // This represents the square's id in a data structure -- it allows us to check if the array pair is either a) part of the snake, b) food, or c) just another plain square
      
      if(snakeBody.contains(squareLocation)){
        currentSquare.css('background', 'blue');
      }
      else if(foodLocation.equals(squareLocation)){
        currentSquare.css('background','orange');
      }
      else{
        currentSquare.css('background', 'white');
      }
    } 




  }
}

GameDisplay.prototype.updateScore = function(score){
  if(score === null){
    $('#score').append(0);
  }

  $('#score').empty(); 
  $('#score').append(score);

}  

GameDisplay.prototype.createGrid = function(numberOfRows) {
  for (var i = 0; i < numberOfRows; i++){
  	var rowToCreate = $('<div></div>');
  	rowToCreate.addClass('row');


	  for(var j=0; j < numberOfRows; j++){
	    rowToCreate.append("<div id="+ i + "-" + j + " class='square'></div>");
	  }

    $('#grid-container').append(rowToCreate);

  }

}
