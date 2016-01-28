/* Scenario A ('forever alone') will be the quickest way to end the game. This route contains 5 event CG to reach the worse ending.

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
  description: '',
  route1: 'Start',
  route2: 'Start',
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
  route1: 'Go home',
  route2: '',
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

var scene17 = new Scene({
  img: 'images/static.gif',
  description: 'the end.',
  route1: '',
  route2: '',
});

var scene18 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene19 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene20 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene21 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene22 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene23 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene24 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene25 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene26 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene27 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene28 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene29 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene30 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene31 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene32 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene33 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene34 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene35 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene36 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene37 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene38 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene39 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene40 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene41 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene42 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene43 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene44 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene45 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene46 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene47 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene48 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene49 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene50 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene51 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene52 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene53 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene54 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene55 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene56 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene57 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene58 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene59 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene60 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene61 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene62 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene63 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene64 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene65 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene66 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene67= new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene68= new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene69 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene70 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene71 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene72 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene73 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene74 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene75 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene76 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene77 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene78 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene79 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene80 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene81 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene82 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene83 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene84 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene85 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene86 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene87 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene88 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene89 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene90 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene91 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene92 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene93 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene94 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene95 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene96 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene97 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene98 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene99 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene100 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});

var scene999 = new Scene({
  img:'',
  description: '',
  route1: '',
  route2: '',
});
//scene0.routes.push(scene1);

scene0.routes.push(scene1, scene1);

scene1.routes.push(scene2);

scene2.routes.push(scene3, scene6);

scene3.routes.push(scene4);

scene4.routes.push(scene5);

scene5.routes.push(scene0);

scene6.routes.push(scene7);

scene7.routes.push(scene8, scene12);

scene8.routes.push(scene9);

scene9.routes.push(scene10);

scene10.routes.push(scene1, scene1);

scene11.routes.push(scene2);

scene12.routes.push(scene3, scene6);

scene13.routes.push(scene4);

scene14.routes.push(scene5);

scene15.routes.push(scene0);

scene16.routes.push(scene7);

scene17.routes.push(scene8, scene12);

scene18.routes.push(scene9);

scene19.routes.push(scene10);

scene20.routes.push(scene1, scene1);

scene21.routes.push(scene2);

scene22.routes.push(scene3, scene6);

scene23.routes.push(scene4);

scene24.routes.push(scene5);

scene25.routes.push(scene0);

scene26.routes.push(scene7);

scene27.routes.push(scene8, scene12);

scene28.routes.push(scene9);

scene29.routes.push(scene10);

scene30.routes.push(scene1, scene1);

scene31.routes.push(scene2);

scene32.routes.push(scene3, scene6);

scene33.routes.push(scene4);

scene34.routes.push(scene5);

scene35.routes.push(scene0);

scene36.routes.push(scene7);

scene37.routes.push(scene8, scene12);

scene38.routes.push(scene9);

scene39.routes.push(scene10);

scene40.routes.push(scene1, scene1);

scene41.routes.push(scene2);

scene42.routes.push(scene3, scene6);

scene43.routes.push(scene4);

scene44.routes.push(scene5);

scene45.routes.push(scene0);

scene46.routes.push(scene7);

scene47.routes.push(scene8, scene12);

scene48.routes.push(scene9);

scene49.routes.push(scene10);

scene50.routes.push(scene1, scene1);

scene51.routes.push(scene2);

scene52.routes.push(scene3, scene6);

scene53.routes.push(scene4);

scene54.routes.push(scene5);

scene55.routes.push(scene0);

scene56.routes.push(scene7);

scene57.routes.push(scene8, scene12);

scene58.routes.push(scene9);

scene59.routes.push(scene10);

scene60.routes.push(scene1, scene1);

scene61.routes.push(scene2);

scene62.routes.push(scene3, scene6);

scene63.routes.push(scene4);

scene64.routes.push(scene5);

scene65.routes.push(scene0);

scene66.routes.push(scene7);

scene67.routes.push(scene8, scene12);

scene68.routes.push(scene9);

scene69.routes.push(scene10);

scene70.routes.push(scene1, scene1);

scene71.routes.push(scene2);

scene72.routes.push(scene3, scene6);

scene73.routes.push(scene4);

scene74.routes.push(scene5);

scene75.routes.push(scene0);

scene76.routes.push(scene7);

scene77.routes.push(scene8, scene12);

scene78.routes.push(scene9);

scene79.routes.push(scene10);

scene80.routes.push(scene1, scene1);

scene81.routes.push(scene2);

scene82.routes.push(scene3, scene6);

scene83.routes.push(scene4);

scene84.routes.push(scene5);

scene85.routes.push(scene0);

scene86.routes.push(scene7);

scene87.routes.push(scene8, scene12);

scene88.routes.push(scene9);

scene89.routes.push(scene10);

scene90.routes.push(scene1, scene1);

scene91.routes.push(scene2);

scene92.routes.push(scene3, scene6);

scene93.routes.push(scene4);

scene94.routes.push(scene5);

scene95.routes.push(scene0);

scene96.routes.push(scene7);

scene97.routes.push(scene8, scene12);

scene98.routes.push(scene9);

scene99.routes.push(scene10);

scene100.routes.push(scene10);