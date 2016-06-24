function GameDisplay() {


}

GameDisplay.prototype.showGrid = function(grid) {
  debugger
  for (var i = 0; i < grid.length; i++){
  	var emptyRow = $('div')
  	emptyRow.addClass('row'); 


	  for(var j=0; j < grid.length; j++){
	    emptyRow.append("<div id="+ i + "-" + j + " class='square'></div>");
	  } 
	  	debugger

    $('#grid-container').append(emptyRow);

  }

}
