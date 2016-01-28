var Scene = function(option) {
  this.img = option.img;
  //this.sound = option.sound;
  this.description = option.description;
  this.routes = [];
  this.route1 = option.route1;
  this.route2 = option.route2;
};

// scene creation

var scene0 = new Scene({
  img:'images/static.gif',
  description: 'Lets explore an old hotel!',
  route1: 'Start',
  route2: '',
});

var scene1 = new Scene({
  img: 'images/window.jpg',
  description: 'It is saturday night. You feel bored shitless. What do you do?',
  route1: 'power on your computer',
  route2: 'pick up your cell phone',
});

var scene2 = new Scene({
  img: 'images/',
  description: 'You pick up your phone',
  route1: 'call your best friend',
  route2: 'text your best friend',
});

var scene3 = new Scene({
  img: '',
  description: 'You call your best friend but nobody is picking up.',
  route1: 'send your friend an SMS',
  route2: 'give up',
});

var scene4 = new Scene({
  img: '',
  description: 'You send your best friend a text message.',
  route1: 'message sent!',
  route2: '',
});

var scene5 = new Scene({
  img: 'images/pcon.jpg',
  description: 'You decide to turn on the computer.',
  route1: 'press the power button',
  route2: '',
});

var scene6 = new Scene({
  img: 'images/pc1.jpg',
  description: 'The computer is working. What do you do?',
  route1: 'watch porn',
  route2: 'go on Reddit',
});

var scene7 = new Scene({
  img: 'images/pc1.jpg',
  description: 'Although you have a strong urge to touch yourself at night, you go against your will because this is not your computer',
  route1: 'go on Reddit',
  route2: 'go to bed',
});

var scene8 = new Scene({
  img: '',
  description: 'You go onto your favorite online message board. A topic of discussion interests you deeply.',
  route1: 'click the link to topic title',
  route2: '',
});

var scene9 = new Scene({
  img: '',
  description: 'The discussion is about sharing photos of haunted places in your local neighborhood.',
  route1: 'keep reading',
  route2: '',
});

var scene10 = new Scene({
  img: '',
  description: '3 hours has gone by quickly. You remember there is an abandoned hotel near your home.',
  route1: 'google the address',
  route2: '',
});

var scene11 = new Scene({
  img: '',
  description: 'You google map the address of the hotel. It is located 15 minutes from your home by walking distance. Do you wish to go tonight?',
  route1: 'yes',
  route2: 'no',
});

var scene12 = new Scene({
  img: '',
  description: 'You decide to call it a night. You go to your room and sleep...',
  route1: 'next',
  route2: '',
});

var scene13 = new Scene({
  img: '',
  description: 'feeling the excitement of urban exploration, you decide to check out the hotel tonight.',
  route1: 'grab the flashlight',
  route2: 'leave',
});

var scene14 = new Scene({
  img: '',
  description: 'you grab a flashlight.',
  route1: 'leave',
  route2: '',
});

var scene15 = new Scene({
  img: '',
  description: 'As you leave home, you walk in the general direction of the hotel.',
  route1: 'check google maps',
  route2: '',
});

var scene16 = new Scene({
  img: 'images/hotel1.jpg',
  description: 'You continue to walk in the direction google maps tells you. You reach the hotel after 20 minutes of walking.',
    route1: 'approach the building',
    route2: '',
});

var scene17 = new Scene({
  img: 'images/hotel2.jpg',
  description: 'Walking towards the hotel, you observe the buildings condiiton. You determine the building is safe to explore.',
  route1: 'approach the door',
  route2: '',
});

var scene18 = new Scene({
  img:'images/door1.png',
  description: 'You notice the door is not locked. Do you try to open it?',
  route1: 'open the door',
  route2: 'leave',
});

var scene19 = new Scene({
  img:'images/door2.jpg',
  description: 'The door opens. There is a strong mildew smell seeping out of the door. You decide to brave it and go inside.',
  route1: 'turn on your flashlight',
  route2: '',
});

var scene20 = new Scene({
  img:'',
  description: 'The flashlight is low on battery. You do not have spare batteries with you. Do you still wish to explore the hotel?',
  route1: 'yes',
  route2: 'no',
});

var scene21 = new Scene({
  img:'',
  description: 'You hold the flashlight infront of you.',
  route1: 'continue...',
  route2: '',
});

var scene22 = new Scene({
  img:'images/lobby.jpg',
  description: 'You look around and see stairs going up and down. The lobby is in terrible condition.',
  route1: 'investigate the lobby',
  route2: '',
});

var scene23 = new Scene({
  img:'images/lobby.jpg',
  description: 'It seems there a fire accident happened in the hotel at some point of its life.',
  route1: 'continue...',
  route2: '',
});

var scene24 = new Scene({
  img:'images/lobby.jpg',
  description: 'The smell of mold and burnt wood is making you feel nauseous. Do you go upstairs or downstairs?',
  route1: 'go up',
  route2: 'go down',
});

var scene25 = new Scene({
  img:'images/stairs.gif',
  description: 'You decide to walk up the stairs.',
  route1: 'head up the stairs',
  route2: '',
});

var scene26 = new Scene({
  img:'images/stairs.gif',
  description: 'As you ascend the stairs, you are taken back at how different the next floor is.',
  route1: 'head to 1st floor',
  route2: '',
});

var scene27 = new Scene({
  img:'images/stairs.gif',
  description: 'Perhaps the firemen were able to extinguish the fire before it cosumed the hotel.',
  route1: 'continue...',
  route2: '',
});

var scene28 = new Scene({
  img:'images/stairs.gif',
  description: 'Do you explore this floor or keep going up?',
  route1: 'explore the 1st floor',
  route2: 'go to the 2nd floor',
});

var scene29 = new Scene({
  img:'images/firstfloor.jpg',
  description: 'As you step into the first floor, you hear the howling wind from the end of the corridor.',
  route1: 'walk down the corridor',
  route2: '',
});

var scene30 = new Scene({
  img:'images/room121c.jpg',
  description: 'You walk down the well-lit corridor and notice a room on the left. The wind is blowing behind the door. Do you go inside?',
  route1: 'yes',
  route2: 'no',
});

var scene31 = new Scene({
  img:'images/room121o.jpg',
  description: 'You open the door to room 121',
  route1: 'enter room 121',
  route2: '',
});

var scene32 = new Scene({
  img:'images/room121dark.png',
  description: 'The go inside. The room is pitch black. You turn on flashlight.',
  route1: 'investigate room 121',
  route2: '',
});

var scene33 = new Scene({
  img:'images/room121desk.jpg',
  description: 'As you walk further into room 121, you see a desk with old photographs, some magazines, a phone and a bag of candy.',
  route1: 'observe the painting',
  route2: '',
});

var scene34 = new Scene({
  img:'images/painting1.jpg',
  description: 'A particular painting catches your attention...',
  route1: 'move your flashlight',
  route2: '',
});

var scene35 = new Scene({
  img:'images/painting2.png',
  description: 'You move your flashlight onto the painting...',
  route1: 'take a closer look',
  route2: '',
});

var scene36 = new Scene({
  img:'images/painting3.jpg',
  description: 'You feel a sense of dread as you realize the girl next to the boy is not human...',
  route1: 'take a closer look',
  route2: '',
});

var scene37 = new Scene({
  img:'images/painting4.jpg',
  description: 'The boys face is melancholic...',
  route1: 'take a closer look',
  route2: '',
});

var scene38 = new Scene({
  img:'images/painting5.jpg',
  description: 'You notice hands lurking behind door that are reaching out to the boy...',
  route1: 'take a closer look',
  route2: '',
});

var scene39 = new Scene({
  img:'images/painting6.jpg',
  description: 'The hands are the size of a childs palm',
  route1: 'continue...',
  route2: '',
});

var scene40 = new Scene({
  img:'images/room121desk.jpg',
  description: 'You managed to break free from the disturbing painting. As you return your eyes to the desk, you notice a magazine is open.',
  route1: 'read the magazine',
  route2: '',
});

var scene41 = new Scene({
  img:'images/painting7.jpg',
  description: 'The magazine article is about the painting infront of you.',
  route1: 'continue...',
  route2: '',
});

var scene42 = new Scene({
  img:'images/hand.jpg',
  description: '...! You feel someone grabbing the back of your head...!?',
  route1: 'continue...',
  route2: '',
});

var scene43 = new Scene({
  img:'',
  description: '................',
  route1: 'continue...',
  route2: '',
});

var scene44 = new Scene({
  img:'',
  description: 'You open your eyes. It seems you have passed out.',
  route1: 'continue...',
  route2: '',
});

var scene45 = new Scene({
  img:'',
  description: 'You are surrounded by pitch blackness. Your flashlight is gone.',
  route1: 'continue...',
  route2: '',
});

var scene46 = new Scene({
  img:'images/lightindark.jpg',
  description: 'You fumble around the darkness. Eventually you feel a small window of light in a direction not far from you.',
  route1: 'continue...',
  route2: '',
});

var scene47 = new Scene({
  img:'images/painting8.jpg',
  description: 'You see a boy standing infront of a glass door next to a little girl.',
  route1: 'continue...',
  route2: '',
});

var scene48 = new Scene({
  img:'images/painting8.jpg',
  description: 'The door has no handles.',
  route1: 'continue...',
  route2: '',
});

var scene49 = new Scene({
  img:'images/hand3.jpg',
  description: 'You try to knock on the window, but the children do not notice. In fact, sound does not seem to exist where you stand.',
  route1: 'continue...',
  route2: '',
});

var scene50 = new Scene({
  img:'images/hand2.jpg',
  description: 'You keep knocking and grabbing the door, but nothing happens. You keep trying. Again. And again. And again. And again. And again.',
  route1: 'next',
  route2: '',
});

var scene51 = new Scene({
  img:'images/stairs.gif',
  description: 'You decide to go upstairs instead.',
  route1: 'go upstairs',
  route2: '',
});

var scene52 = new Scene({
  img:'images/secondfloor.jpg',
  description: 'You reach the second floor. The decor and atmosphere is completely different from the previous floors.',
  route1: 'investigate second floor',
  route2: '',
});

var scene53 = new Scene({
  img:'images/secondfloor.jpg',
  description: 'The room is filled with empty film reels. There is an old television... it is on.',
  route1: 'move closer to the tv',
  route2: '',
});

var scene54 = new Scene({
  img:'images/television.jpg',
  description: 'You contemplate why the television is on. Perhaps the homeless use the hotel as a temporary home... Do you leave it on?',
  route1: 'leave it on',
  route2: 'turn it off',
});

var scene55 = new Scene({
  img:'images/television.jpg',
  description: 'You decide to leave it on. On the television box, you find an old VHS tape without a label. Do you put it in?',
  route1: 'push the tape in',
  route2: 'dont push it in',
});

var scene56 = new Scene({
  img:'images/vhs.png',
  description: 'You push the VHS tape into the television set.',
  route1: 'let the tape play',
  route2: '',
});

var scene57 = new Scene({
  img:'images/vhsplay.gif',
  description: 'The tape starts playing.',
  route1: 'watch the tv screen',
  route2: '',
});

var scene58 = new Scene({
  img:'images/fear1.gif',
  description: '...',
  route1: 'next',
  route2: '',
});

var scene59 = new Scene({
  img:'images/fear2.gif',
  description: '...',
  route1: 'next',
  route2: '',
});

var scene60 = new Scene({
  img:'images/fear3.gif',
  description: '...',
  route1: 'next',
  route2: '',
});

var scene61 = new Scene({
  img:'images/fear4.png',
  description: 'you pause the tape.',
  route1: 'next',
  route2: '',
});

var scene62 = new Scene({
  img:'images/fear4.png',
  description: 'shocked by what you witnessed, you stand silently infront of the television. There is a soft humming noise seeping out of the tv.',
  route1: 'next',
  route2: '',
});

var scene63 = new Scene({
  img:'images/fear5.jpg',
  description: 'As you continue thinking about what you saw, the screen suddenly changes...',
  route1: 'run',
  route2: 'turn off the tv',
});

var scene64 = new Scene({
  img:'images/fear6.gif',
  description: 'You turn off the tv. As you turn around, you are confronted by the same creature that you saw just seconds ago.',
  route1: 'next',
  route2: '',
});

var scene65 = new Scene({
  img:'',
  description: 'You run towards the stairs. You trip and you fall down a flight of stairs, landing face up on the first floor.',
  route1: 'get up',
  route2: '',
});

var scene66 = new Scene({
  img:'images/bigbadwolf.gif',
  description: 'As you try your best to get up, you notice a large figure standing next to you.',
  route1: 'next',
  route2: '',
});

var scene67 = new Scene({
  img:'',
  description: 'You do not push the tape in. You decide to look around the second floor before exploring the rest of the hotel',
  route1: 'go to the first floor',
  route2: 'go to the basement',
});

var scene68 = new Scene({
  img:'images/downstairs1.jpg',
  description: 'You decide to head down the basement...',
  route1: 'walk downstairs',
  route2: '',
});

var scene69 = new Scene({
  img:'images/downstairs2.jpg',
  description: 'As you descend the stairs, you notice a pair of eyes staring straight at you.',
  route1: 'keep going',
  route2: 'run away',
});

var scene70 = new Scene({
  img:'images/basement.jpg',
  description: 'As you slowly pace your way down the stairs, you realize the glowing eyes are actually an electric box.',
  route1: 'look closer',
  route2: 'go deeper into basement',
});

var scene71 = new Scene({
  img:'images/electric1.jpg',
  description: 'Do you open the electric box?',
  route1: 'open it',
  route2: 'dont open it',
});

var scene72 = new Scene({
  img:'images/electric2.jpg',
  description: 'You open the electric box. You dont know which switch lights up the basement. You flick them all on.',
  route1: 'next',
  route2: '',
});

var scene73 = new Scene({
  img:'',
  description: 'The basement light flickers for a while. You hear a faint scribbling noise behind you...',
  route1: 'turn around',
  route2: '',
});

var scene74 = new Scene({
  img:'images/spider1.jpg',
  description: 'You turn around. You see a shadow creeping out of the cracks of the basement.',
  route1: 'next',
  route2: '',
});

var scene75 = new Scene({
  img:'images/spider2.jpg',
  description: 'You brain tells you to run but your legs dont move. You are overcome with fear.',
  route1: 'next',
  route2: '',
});

var scene76 = new Scene({
  img:'',
  description: 'you feel a mass of tingling sensations all over your leg. Now it reaches your thighs. And your belly. Now your chest.',
  route1: 'next',
  route2: '',
});

var scene77 = new Scene({
  img:'',
  description: 'You feel a burning sensation all over your body. Your vision starts blurring. You collapse onto the floor.',
  route1: 'next',
  route2: '',
});

var scene78 = new Scene({
  img:'images/spiders.jpg',
  description: '...',
  route1: 'next',
  route2: '',
});

var scene79 = new Scene({
  img:'images/basement.jpg',
  description: 'You decide to go deeper into the basement. You notice an orange hue glowing from a door of the basement.',
  route1: 'enter the door',
  route2: '',
});

var scene80 = new Scene({
  img:'images/basement2.jpg',
  description: 'As you walk deeper into the basement, there are multiple rooms on each side of the basement.',
  route1: 'next',
  route2: '',
});

var scene81 = new Scene({
  img:'images/basement2.jpg',
  description: 'Each door has a small window. Do you look inside?',
  route1: 'peek inside',
  route2: 'keep going',
});

var scene82 = new Scene({
  img:'images/cell.jpg',
  description: 'You peek through the window. There is a bed, a small tv and a caged window...',
  route1: 'keep going',
  route2: '',
});

var scene83 = new Scene({
  img:'images/basement2.jpg',
  description: 'You continue walking deeper into the basement. The walk feels never-ending as each second passes....',
  route1: 'keep going',
  route2: '',
});

var scene84 = new Scene({
  img:'images/basement2.jpg',
  description: 'You keep walking...',
  route1: 'keep going',
  route2: '',
});

var scene85 = new Scene({
  img:'images/basement2.jpg',
  description: 'You keep walking......',
  route1: 'keep going',
  route2: '',
});

var scene86 = new Scene({
  img:'images/basement2.jpg',
  description: '... and you keep walking. You check your watch. It seems an hour has passed since you started exploring the basement.',
  route1: 'keep going',
  route2: 'give up?',
});

var scene87 = new Scene({
  img:'images/basement2.jpg',
  description: 'You keep walking.........',
  route1: 'keep going',
  route2: '',
});

var scene88 = new Scene({
  img:'images/basement2.jpg',
  description: 'You keep walking............',
  route1: 'keep going',
  route2: '',
});

var scene89 = new Scene({
  img:'images/basement2.jpg',
  description: 'You keep walking...............',
  route1: 'keep going',
  route2: '',
});

var scene90 = new Scene({
  img:'images/basement2.jpg',
  description: 'You keep walking..................',
  route1: 'keep going',
  route2: '',
});

var scene91 = new Scene({
  img:'images/',
  description: 'You finally reach the end of the basement. There is a metal door. Do you open it?',
  route1: 'open the door',
  route2: 'do not open the door',
});

var scene92 = new Scene({
  img:'images/scratches.jpg',
  description: 'The door does not budge. You notice deep scratch marks on the doors body. It looks too forced to be made by an animal.',
  route1: 'turn back and leave',
  route2: '',
});

var scene93 = new Scene({
  img:'images/nurse1.jpg',
  description: 'You decide to turn around and leave the basement, however... something- someone is slowly making its way towards you',
  route1: 'next',
  route2: '',
});

var scene94 = new Scene({
  img:'images/nurses2.gif',
  description: 'In panic mode, you try to ma-',
  route1: 'next',
  route2: '',
});

var scene95 = new Scene({
  img:'images/nurse3.jpg',
  description: '----------',
  route1: 'next',
  route2: '',
});

var scene100 = new Scene({
  img:'',
  description: 'Your gut feeling tells you it is unwise to explore an abandoned hotel alone. You call it a night and go home.',
  route1: 'walk home',
  route2: '',
});

var scene666 = new Scene({
  img:'images/youdied.png',
  description: 'R.I.P.',
  route1: 'next',
  route2: '',
});

var scene999 = new Scene({
  img:'images/gameover.jpg',
  description: 'Play Again?',
  route1: 'next',
  route2: '',
});

scene0.routes.push(scene1);

scene1.routes.push(scene5, scene2);

scene2.routes.push(scene3, scene4);

scene3.routes.push(scene4, scene5);

scene4.routes.push(scene5);

scene5.routes.push(scene6);

scene6.routes.push(scene7, scene8);

scene7.routes.push(scene8, scene12);

scene8.routes.push(scene9);

scene9.routes.push(scene10);

scene10.routes.push(scene11);

scene11.routes.push(scene13, scene12);

scene12.routes.push(scene999);

scene13.routes.push(scene14, scene15);

scene14.routes.push(scene15);

scene15.routes.push(scene16);

scene16.routes.push(scene17);

scene17.routes.push(scene18);

scene18.routes.push(scene19, scene12);

scene19.routes.push(scene20);

scene20.routes.push(scene21, scene12);

scene21.routes.push(scene22);

scene22.routes.push(scene23);

scene23.routes.push(scene24);

scene24.routes.push(scene25, scene68);

scene25.routes.push(scene26);

scene26.routes.push(scene27);

scene27.routes.push(scene28);

scene28.routes.push(scene29, scene51);

scene29.routes.push(scene30);

scene30.routes.push(scene31, scene51);

scene31.routes.push(scene32);

scene32.routes.push(scene33);

scene33.routes.push(scene34);

scene34.routes.push(scene35);

scene35.routes.push(scene36);

scene36.routes.push(scene37);

scene37.routes.push(scene38);

scene38.routes.push(scene39);

scene39.routes.push(scene40);

scene40.routes.push(scene41);

scene41.routes.push(scene42);

scene42.routes.push(scene43);

scene43.routes.push(scene44);

scene44.routes.push(scene45);

scene45.routes.push(scene46);

scene46.routes.push(scene47);

scene47.routes.push(scene48);

scene48.routes.push(scene49);

scene49.routes.push(scene50);

scene50.routes.push(scene999);

scene51.routes.push(scene52);

scene52.routes.push(scene53);

scene53.routes.push(scene54);

scene54.routes.push(scene55, scene68);

scene55.routes.push(scene56, scene67);

scene56.routes.push(scene57);

scene57.routes.push(scene58);

scene58.routes.push(scene59);

scene59.routes.push(scene60);

scene60.routes.push(scene61);

scene61.routes.push(scene62);

scene62.routes.push(scene63);

scene63.routes.push(scene65, scene64);

scene64.routes.push(scene666);

scene65.routes.push(scene66);

scene66.routes.push(scene666);

scene67.routes.push(scene29, scene68);

scene68.routes.push(scene69);

scene69.routes.push(scene70);

scene70.routes.push(scene71, scene79);

scene71.routes.push(scene72, scene79);

scene72.routes.push(scene73);

scene73.routes.push(scene74);

scene74.routes.push(scene75);

scene75.routes.push(scene76);

scene76.routes.push(scene77);

scene77.routes.push(scene78);

scene78.routes.push(scene666);

scene79.routes.push(scene80);

scene80.routes.push(scene81);

scene81.routes.push(scene82, scene83);

scene82.routes.push(scene83);

scene83.routes.push(scene84);

scene84.routes.push(scene85);

scene85.routes.push(scene86);

scene86.routes.push(scene87, scene100);

scene87.routes.push(scene88);

scene88.routes.push(scene89);

scene89.routes.push(scene90);

scene90.routes.push(scene91);

scene91.routes.push(scene92, scene93);

scene92.routes.push(scene93);

scene93.routes.push(scene94);

scene94.routes.push(scene95);

scene95.routes.push(scene666);

scene100.routes.push(scene999);

scene666.routes.push(scene999);

scene999.routes.push(scene0);