
$(document).ready(function(){
	var game = new Game();
	game.show();  
	initialize(); 
});






// edge cases to watch out for: 
// cannot eat "self" -- meaning it should not be able to move "against itself " on purpose though, as that would ruin the mechanics for the player









var initialize = function (){
	$('#start-button').click(function(){
		game.start(); 


		/*

		Place code to initialize snake and direction, etc. 

		*/

	});
}

 







var drawSnake = function () {
	

}

var createGrid = function () {
	var i = 0;
	debugger 
	for (i; i < grid.length; i++){
		$('#grid-container').append("<div id=" + i + " class='row'></div>");
	}

	var j=0;
	for(j; j < grid.length; j++){
		$('.row').append("<div id=" + i + " class='square'></div>");
	}
}