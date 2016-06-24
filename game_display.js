function GameDisplay() {


}

GameDisplay.prototype.show = function(foodLocation, snakeBody) {
  // go through each row
    // go through each square
      // if the square is in the snake body
        // color it green
      // else if it is food
        // color it red
      // else
        // color it white
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
