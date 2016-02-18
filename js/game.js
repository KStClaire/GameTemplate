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
        case KEYCODE_LEFT:  console.log(evt.keyCode+" a down"); return false;
        case KEYCODE_RIGHT: console.log(evt.keyCode+" d down"); return false;
        case KEYCODE_UP:    console.log(evt.keyCode+" w down"); return false;
        case KEYCODE_DOWN:  console.log(evt.keyCode+" s down"); return false;
    }
}
//function handleKeyUp(evt) {
//    if(!evt){ var evt = window.event; }  //browser compatibility
//    switch(evt.keyCode) {
//        case KEYCODE_LEFT:	console.log(evt.keyCode+" up"); break;
//        case KEYCODE_RIGHT: console.log(evt.keyCode+" up"); break;
//        case KEYCODE_UP:	console.log(evt.keyCode+" up"); break;
//        case KEYCODE_DOWN:	console.log(evt.keyCode+" up"); break;
//    }
//}
document.onkeydown = handleKeyDown;
//document.onkeyup = handleKeyUp;



function drawPlayButton() {
    playbtn = new createjs.Shape(); 
    playbtn.graphics.beginFill("#009933").drawRoundRect(350, 350, 100, 40,10); 
    
    stage.enableMouseOver();
                    
    playbtn.on("click", function(evt) { changeState(GameStates.PLAY_GAME); });
    playbtn.on("mouseover", function(evt) { playbtn.graphics.beginFill("#33cc33").drawRoundRect(350, 350, 100, 40,10); });
    playbtn.on("mouseout", function(evt) { playbtn.graphics.beginFill("#009933").drawRoundRect(350, 350, 100, 40,10); });
    playbtn.on("mousedown", function(evt) { changeState(GameStates.PLAY_GAME); });
    
    stage.addChild(playbtn); 
    
    txt = new createjs.Text("Play", "22px Arial", "#fff");
    txt.x = 378;
    txt.y = 358; 
    stage.addChild(txt);
}

function drawInfoButton() {
    btn = new createjs.Shape(); 
    btn.graphics.beginFill("#9999ff").drawRoundRect(330, 430, 150, 40,10); 
    
    stage.enableMouseOver();
                    
    btn.on("click", function(evt) { changeState(GameStates.INSTRUCTIONS); });
    btn.on("mouseover", function(evt) { btn.graphics.beginFill("#6666ff").drawRoundRect(330, 430, 150, 40,10); });
    btn.on("mouseout", function(evt) { btn.graphics.beginFill("#9999ff").drawRoundRect(330, 430, 150, 40,10); });
    btn.on("mousedown", function(evt) { changeState(GameStates.INSTRUCTIONS); });
    
    stage.addChild(btn); 
    
    txt = new createjs.Text("Instructions", "22px Arial", "#fff");
    txt.x = 350;
    txt.y = 438; 
    stage.addChild(txt);
}

function drawMenuButton() {
    menubtn = new createjs.Shape(); 
    menubtn.graphics.beginFill("#33ccff").drawRoundRect(330, 430, 150, 40,10); 
    
    stage.enableMouseOver();
                    
    menubtn.on("click", function(evt) { changeState(GameStates.MAIN_MENU); });
    menubtn.on("mouseover", function(evt) { menubtn.graphics.beginFill("#6666ff").drawRoundRect(330, 430, 150, 40,10); });
    menubtn.on("mouseout", function(evt) { menubtn.graphics.beginFill("#33ccff").drawRoundRect(330, 430, 150, 40,10); });
    menubtn.on("mousedown", function(evt) { changeState(GameStates.MAIN_MENU); });
    
    stage.addChild(menubtn); 
    
    txt = new createjs.Text("Main Menu", "22px Arial", "#fff");
    txt.x = 350;
    txt.y = 438; 
    stage.addChild(txt);
}

function displayScore(){
    scoretxt = new createjs.Text("Score: 0", "22px Arial", "#fff");
    scoretxt.x = 350;
    scoretxt.y = 538; 
    stage.addChild(scoretxt);   
}

function startGame() {
    drawInfoButton();
    drawPlayButton();
}

function playGame() {
    displaySprites();
    
}

function gameOver() {
    drawMenuButton();
}

function displaySprites() {
    walk.x=0;
    walk.y=450;
    walk.gotoAndPlay("walkRight");
    stage.addChild(walk);   
}


function main() {
    setupCanvas();
    loadFiles();
    mouseInit();  
}

var FPS = 30;
function loop() {
    walk.x+=3;
    if(createjs.Ticker.getTime() > 5000){
        changeState(GameStates.GAME_OVER);   
    }
    stage.update();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

if( !!(window.addEventListener)) {
    window.addEventListener ("DOMContentLoaded", main);
}else{ //MSIE
    window.attachEvent("onload", main);
}