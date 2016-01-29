$(document).ready(function(){
  // Set up variables
  var currentScene = scene0;
  var text = $('#dialogue');
  var img = $('#scene');
  var sound = $('#sound');
  var leftButton = $('.buttonleft');
  var rightButton = $('.buttonright');

  var loadScene =function(){
    console.log(currentScene.description);
    console.log(currentScene.img);
    text.text(currentScene.description);
    img.css({
    backgroundImage: 'url(' + currentScene.img + ')'
    });

    if (currentScene.route1){
      leftButton.text(currentScene.route1);
      leftButton.show();
    } else {
      leftButton.hide();
    }

    if (currentScene.route2){
      rightButton.text(currentScene.route2);
      rightButton.show();
    } else {
      rightButton.hide();
    }
  };

  var bindLeftButton = function (){
    leftButton.on('click', function(){
      currentScene = currentScene.routes[0];
      loadScene();
    });
  }

  var bindRightButton = function (){
    rightButton.on('click', function(){
      currentScene = currentScene.routes[1];
      loadScene();
    });
  }

  var init = function (){
    loadScene();
    bindLeftButton();
    bindRightButton();
  }

  init();
});