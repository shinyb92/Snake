function GameDisplay() {

}

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
