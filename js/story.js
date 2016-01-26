/*
Scenario A ('forever alone') will be the quickest way to end the game. This route contains 5 event CG to reach the worse ending.

Scenario B ('paradox') takes 8 event CG to reach the ending.

Scenario C ('netflix') is the longest way to end the game. This is the *best* ending. Takes 8 event CG to reach the best ending.
*/

var Scene = function(option) {
  this.img = option.img;
  this.description = option.description;
  this.routes = [];
};

// Scene Creation
var scene1 = new Scene({
  img: '../images/1.png',
  description: '<h2>The last man on Earth sat alone in a room.</h2>'
});

var scene2 = new Scene({
  img: '../images/2.png',
  description: '<h2>There was a knock on the door...</h2>'
});

var scene3 = new Scene({
  img: '...',
  description: '<h2>The man ignores it.</h2>'
});

var scene4 = new Scene({
  img: '...',
  description: '<h2>The knocking stops after what seemed like an eternity.</h2>'
});

var scene5 = new Scene({
  img: '...',
  description: '<h2>The last man on Earth sat alone in a room.</h2>'
});

var scene6 = new Scene({
  img: '...',
  description: '<h2>The man opens the door.</h2>'
});

var scene7 = new Scene({
  img: '...',
  description: '<h2>The man looks into the peep hole. He does not see anyone outside his door.</h2>'
});

var scene8 = new Scene({
  img: '...',
  description: '<h2>There is nobody at the door. The man hears footsteps somewhere outside his house.</h2>'
});

var scene9 = new Scene({
  img: '...',
  description: '<h2>The man heads to the backyard to investigate.</h2>'
});

var scene10 = new Scene({
  img: '...',
  description: '<h2>The man sees a statue of a headless man in the backyard.</h2>'
});

var scene11 = new Scene({
  img: '...',
  description: '<h2>The man decides to go home. The door is closed. He turns the handle but it is locked. The man looks into the window...</h2>'
});

var scene12 = new Scene({
  img: '...',
  description: '<h2>He sees a man, sitting alone in a room.</h2>'
});

var scene13 = new Scene({
  img: '...',
  description: '<h2>The man steps outside the door. There is a coffin planted firmly in the ground. It is chrome-colored and shines in the darkness of the night.</h2>'
});

var scene14 = new Scene({
  img: '...',
  description: '<h2>The man opens the coffin with his hands.</h2>'
});

var scene15 = new Scene({
  img: '...',
  description: '<h2>The coffin door opens gentle. A fully-grown woman slowly walks out of the coffin.</h2>'
});

var scene16 = new Scene({
  img: '...',
  description: '<h2>The last man on Earth has found the last woman on Earth.</h2>'
});

var scene17 = new Scene({
  img: '...',
  description: '<h2>Freaked out by the unexplainable appearence of the coffin, the man runs home.</h2>'
});

//scene1.routes.push()

$(document).ready(function(){

var playGame = $('.textframe').append('The last man on Earth sat alone in a room.');

var changeText = $('.textframe').empty('').append('There was a knock on the door');

});