var stage;
var myText;
var circle;

function setupCanvas() {
    var canvas = document.getElementById("game"); //get canvas with id='game'
    canvas.width = 800;
    canvas.height = 600;
    stage = new createjs.Stage(canvas); //makes stage object from the canvas
}

var mouseX, mouseY;
function mouseInit() {
    stage.on("stagemousemove", function(evt) {
        mouseX = Math.floor(evt.stageX);
        mouseY = Math.floor(evt.stageY);
    });
}

var KEYCODE_LEFT = 65;
var KEYCODE_UP = 87;
var KEYCODE_RIGHT = 68;
var KEYCODE_DOWN = 83;
function handleKeyDown(evt) {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEYCODE_LEFT:  walkLeft(); return false;
        case KEYCODE_RIGHT: walkRight(); return false;
        case KEYCODE_UP:    console.log(evt.keyCode+" w down"); return false;
        case KEYCODE_DOWN:  console.log(evt.keyCode+" s down"); return false;
    }
}
function handleKeyUp(evt) {
    if(!evt){ var evt = window.event; }  //browser compatibility
    switch(evt.keyCode) {
        case KEYCODE_LEFT:	standLeft(); break;
        case KEYCODE_RIGHT: standRight(); break;
        case KEYCODE_UP:	console.log(evt.keyCode+" up"); break;
        case KEYCODE_DOWN:	console.log(evt.keyCode+" up"); break;
    }
}
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;


function main() {
    setupCanvas();
    loadFiles();
    mouseInit();
}

var FPS = 30;
function loop() {
    //walk.x+=3;
    //changeState(GameStates.GAME_OVER);
    stage.update();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

if( !!(window.addEventListener)) {
    window.addEventListener ("DOMContentLoaded", main);
}else{
    window.attachEvent("onload", main);
}