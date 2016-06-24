var game;

$(document).ready(function(){
	game = new Game();
	game.createGrid();
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

}


/* I like this piece of code:
  if (keystate[KEY_LEFT] && snake.direction !== RIGHT) snake.direction = LEFT;
            if (keystate[KEY_UP] && snake.direction !== DOWN) snake.direction = UP;
            if (keystate[KEY_RIGHT] && snake.direction !== LEFT) snake.direction = RIGHT;
            if (keystate[KEY_DOWN] && snake.direction != UP) snake.direction = DOWN;

            for moving my snake. A lot of the problems with the games I was seeing was that they
            auto-ended the game if you ran into your own body. Which is fine, it makes logical sense.
            But this decision, made by the code itself, is much better for the user.
            Another program sort of did this cool thing where it "wrapped around", but I think it's more
            complicated than necessary and also doesn't challenge the user as much. This logic is better
*/
