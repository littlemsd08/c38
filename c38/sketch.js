var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;
var car1Image, car2Image,trackImage

function preload() {
  car1Image=loadImage("images/car1.png")
  car2Image=loadImage("images/car4.png")
 
 
 trackImage=loadImage("images/track.jpg")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end()

  }
  if (track.x < 300){
    track.x=300 }
}
