/*
Scenario A ('forever alone') will be the quickest way to end the game. This route contains 5 event CG to reach the worse ending.

Scenario B ('paradox') takes 8 event CG to reach the ending.

Scenario C ('netflix') is the longest way to end the game. This is the *best* ending. Takes 8 event CG to reach the best ending.
*/

var Scene = function(option) {
  this.img = option.img;
  //this.sound = option.sound;
  this.description = option.description;
  this.routes = [];
  this.route1 = option.route1;
  this.route2 = option.route2;
};

// scene creation

/*
var scene0 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});
*/

var scene0 = new Scene({
  img:'images/static.gif',
  //sound:'sound/twilightsyndrome.mp3',
  description: 'The Last Man on Earth',
  route1: 'Start',
  route2: '',
});

var scene1 = new Scene({
  img: 'images/1.jpg',
  //sound:'sound/twilightsyndrome.mp3',
  description: 'The last man on Earth sat alone in a room.',
  route1: 'continue...',
  route2: '',
});

var scene2 = new Scene({
  img: 'images/2.jpg',
  description: 'There was a knock on the door...',
  route1: 'ignore it',
  route2: 'open the door',
});

var scene3 = new Scene({
  img: 'images/2.jpg',
  description: 'The man ignores it.',
  route1: 'continue...',
  route2: '',
});

var scene4 = new Scene({
  img: 'images/2.jpg',
  description: 'The knocking stops after what seemed like an eternity.',
  route1: 'continue...',
  route2: '',
});

var scene5 = new Scene({
  img: 'images/2.jpg',
  description: 'The last man on Earth sat alone in a room.',
  route1: 'next',
  route2: '',
});

var scene6 = new Scene({
  img: 'images/1.jpg',
  description: 'The man opens the door.',
  route1: 'Step outside',
  route2: '',
});

var scene7 = new Scene({
  img: 'images/1.jpg',
  description: 'There is nobody at the door. The man hears footsteps somewhere outside his house.',
  route1: 'Leave from the back door',
  route2: 'Leave the front door',
});

var scene8 = new Scene({
  img: 'images/1.jpg',
  description: 'The man heads to the backyard to investigate.',
  route1: 'Investigate the backyard',
  route2: '',
});

var scene9 = new Scene({
  img: 'images/1.jpg',
  description: 'The man sees a statue of a headless man in the backyard.',
  route1: 'Go back home',
  route2: '',
});

var scene10 = new Scene({
  img: 'images/1.jpg',
  description: 'The man decides to go home. The door is closed. He turns the handle but it is locked. The man looks into the window...',
  route1: 'Look through the window',
  route2: '',
});

var scene11 = new Scene({
  img: 'images/1.jpg',
  description: 'He sees a man, sitting alone in a room.',
  route1: 'the end.',
  route2: '',
});

var scene12 = new Scene({
  img: 'images/1.jpg',
  description: 'The man steps outside the door. There is a coffin planted firmly in the ground. It is chrome-colored and shines in the darkness of the night.',
  route1: 'Go back home',
  route2: 'Open the coffin',
});

var scene13 = new Scene({
  img: 'images/1.jpg',
  description: 'The man opens the coffin with his hands.',
  route1: 'Look inside',
  route2: '',
});

var scene14 = new Scene({
  img: 'images/1.jpg',
  description: 'The coffin door opens gently. A fully-grown woman slowly walks out of the coffin.',
  route1: '',
  route2: 'Go home',
});

var scene15 = new Scene({
  img: 'images/1.jpg',
  description: 'The last man on Earth has found the last woman on Earth.',
  route1: 'the end.',
  route2: '',
});

var scene16 = new Scene({
  img: 'images/1.jpg',
  description: 'Freaked out by the unexplainable appearence of the coffin, the man runs home.',
    route1: 'Run home',
    route2: '',
});

var scene66 = new Scene({
  img: 'images/static.gif',
  description: 'the end.',
  route1: '',
  route2: '',
});

//scene0.routes.push(scene1);

  scene0.routes.push(scene1);

  scene1.routes.push(scene2);

  scene2.routes.push(scene3, scene6);

  scene3.routes.push(scene4);

  scene4.routes.push(scene5);

  scene5.routes.push(scene66);

  scene6.routes.push(scene7);

  scene7.routes.push(scene8, scene12);

  scene8.routes.push(scene9);

  scene9.routes.push(scene10);

  scene10.routes.push(scene11);

  scene12.routes.push(scene16, scene13);

  scene13.routes.push(scene14);

  scene14.routes.push(scene15);

  scene16.routes.push(scene5);

$(document).ready(function(){
  // Set up variables
  var currentScene = scene0;
  var text = $('#dialogue');
  var img = $('#scene');
  //var sound = $('#sound');
  var leftButton = $('.buttonleft');
  var rightButton = $('.buttonright');

  var loadScene =function(){
    console.log(currentScene.description);
    console.log(currentScene.img);
    $('#dialogue').text(currentScene.description);
    $('#scene').css({
      background: 'url(' + currentScene.img + ')'
    });
    //$('#sound').text(currentScene.sound);
    $('.buttonleft').text(currentScene.route1);
    $('.buttonright').text(currentScene.route2);
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

  loadScene();
});