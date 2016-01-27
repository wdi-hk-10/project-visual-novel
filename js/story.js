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

// scene creation
var scene1 = new Scene({
  img: 'images/1.jpg',
  description: 'The last man on Earth sat alone in a room.',
  route0: 'continue...',
});

var scene2 = new Scene({
  img: '/images/2.jpg',
  description: 'There was a knock on the door...',
  route1: 'ignore it',
  route4: 'open the door',
});

var scene3 = new Scene({
  img: 'images/1.jpg',
  description: 'The man ignores it.',
  route2: 'continue...',
});

var scene4 = new Scene({
  img: 'images/1.jpg',
  description: 'The knocking stops after what seemed like an eternity.',
  route3: 'continue...',
});

var scene5 = new Scene({
  img: 'images/1.jpg',
  description: 'The last man on Earth sat alone in a room.',
});

var scene6 = new Scene({
  img: 'images/1.jpg',
  description: 'The man opens the door.',
  route5: 'Step outside',
});

var scene7 = new Scene({
  img: 'images/1.jpg',
  description: 'There is nobody at the door. The man hears footsteps somewhere outside his house.',
  route6: 'Leave from the back door',
  route10: 'Leave the front door',
});

var scene8 = new Scene({
  img: 'images/1.jpg',
  description: 'The man heads to the backyard to investigate.',
  route7: 'Investigate the backyard',
});

var scene9 = new Scene({
  img: 'images/1.jpg',
  description: 'The man sees a statue of a headless man in the backyard.',
  route8: 'Go back home',
});

var scene10 = new Scene({
  img: 'images/1.jpg',
  description: 'The man decides to go home. The door is closed. He turns the handle but it is locked. The man looks into the window...',
  route9: 'Look through the window',
});

var scene11 = new Scene({
  img: 'images/1.jpg',
  description: 'He sees a man, sitting alone in a room.',
});

var scene12 = new Scene({
  img: 'images/1.jpg',
  description: 'The man steps outside the door. There is a coffin planted firmly in the ground. It is chrome-colored and shines in the darkness of the night.',
  route11: 'Go back home',
  route13: 'Open the coffin',
});

var scene13 = new Scene({
  img: 'images/1.jpg',
  description: 'The man opens the coffin with his hands.',
  route14: 'Look inside',
});

var scene14 = new Scene({
  img: 'images/1.jpg',
  description: 'The coffin door opens gently. A fully-grown woman slowly walks out of the coffin.</h2>',
  route15: 'Go home',
});

var scene15 = new Scene({
  img: 'images/1.jpg',
  description: 'The last man on Earth has found the last woman on Earth.',
});

var scene16 = new Scene({
  img: 'images/1.jpg',
  description: 'Freaked out by the unexplainable appearence of the coffin, the man runs home.',
    route12: 'Run home',
});

    scene1.routes.push(scene2);
    scene2.routes.push(scene3, scene6);
    scene3.routes.push(scene4);
    scene4.routes.push(scene5);
    scene5.routes.push();
    scene6.routes.push(scene7);
    scene7.routes.push(scene8, scene12);
    scene8.routes.push(scene9);
    scene9.routes.push(scene10);
    scene10.routes.push(scene11);
    scene11.routes.push();
    scene12.routes.push(scene16, scene13);
    scene13.routes.push(scene14);
    scene14.routes.push(scene15);
    scene15.routes.push();
    scene16.routes.push(scene5);

$(document).ready(function(){
  // Set up variables
  var currentScene = scene1;
  var textFrame = $('.textframe');
  var storyFrame = $('.storyframe');
  var leftButton = $('.buttonleft');
  var rightButton = $('.buttonright');

  var loadScene =function(){
    $('.textframe').text(currentScene.description);
    $('.storyframe').text(currentScene.img);
    $('.buttonleft').text('next');
    $('.buttonright').text('next');
    //jQuery
    //populate screen with
    //currentScene details
  };


  // Main program
  leftButton.on('click', function(){
    currentScene = currentScene.routes[0];
    loadScene();
  });

  rightButton.on('click', function(){
    currentScene = currentScene.routes[1];
    loadScene();
  });


});