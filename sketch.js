var form, player, game;
var playerCount;
var gameState =0;
var database;
var canvas, backgroundImage;
var allPlayers, distance=0;

function setup(){
    canvas = createCanvas(400,400);
    //creating database
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }


}

