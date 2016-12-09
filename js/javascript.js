var game;

$(document).ready(function(){
	game = new Game();
	game.createGrid();
	initialize();
});




var initialize = function (){
	$('#start-button').click(function(){
		game.start();
	});
}









