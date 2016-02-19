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
                    
    menubtn.on("click", function(evt) { console.log("pressed"); });
    menubtn.on("mouseover", function(evt) { menubtn.graphics.beginFill("#6666ff").drawRoundRect(330, 430, 150, 40,10); });
    menubtn.on("mouseout", function(evt) { menubtn.graphics.beginFill("#33ccff").drawRoundRect(330, 430, 150, 40,10); });
    menubtn.on("mousedown", function(evt) {  });
    
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
    stage.addChild(titleScreen);
    drawInfoButton();
    drawPlayButton();
}

function playGame() {
    titleScreen.visible = false;
    stage.addChild(backgroundScreen);
    displaySprites();
    
}

function info(){
    stage.addChild(instructionScreen);
    drawMenuButton();
}

function gameOver() {
    drawMenuButton();
}

function displaySprites() {
    walk.x=150;
    walk.y=450;
    //walk.scaleX = -1;
    stage.addChild(walk);   
}

var walking = false;

function walkRight() {
    if (!walking)
    {
        walk.gotoAndPlay("walkRight");
        walking = true;
    }
    walk.x += 3;
   // stage.addChild(walk);
}
function walkLeft(){
    if (!walking)
    {
        walk.gotoAndPlay("walkLeft");
        walking = true;
    }
    walk.x-=3;
   // stage.addChild(walk);
}
function standLeft(){
    walk.gotoAndPlay("standLeft");
    walking = false;
   // stage.addChild(walk);
}
function standRight(){
    walk.gotoAndPlay("standRight");
    walking = false;
   // stage.addChild(walk);
}


