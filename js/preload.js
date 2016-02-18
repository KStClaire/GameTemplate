var date = new Date();
var cacheVersion = date.getTime();

var jsEnd = ".js?a=" + cacheVersion;

manifest = [
    {src:"title.jpg", id:"title"},
    {src:"background.jpg", id:"background"},
    {src:"instructions.jpg", id:"instructions"},
    {src:"gameover.jpg", id:"gameover"},
    {src:"sprites.png", id:"mySprites"},
    {src:"buttons.png", id:"button"}
   // {src:"levelsign.png", id:"levelsign"}
];

var queue, walkSheet, walk;

function loadComplete(evt) {
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
   // levelFrame = new createjs.Bitmap(queue.getResult("levelsign"));  
    
    changeState(GameStates.MAIN_MENU);
    
    var walkSheet = new createjs.SpriteSheet({
        images: [queue.getResult("mySprites")],
        frames: [[0,0,114,53,0,55.05,50.5],[114,0,114,53,0,55.05,50.5],[228,0,114,52,0,55.05,49.5],[342,0,115,53,0,56.05,50.5],[0,53,114,53,0,55.05,50.5],[114,53,114,53,0,55.05,50.5],[228,53,114,53,0,55.05,50.5],[342,53,114,53,0,55.05,50.5],[0,106,114,53,0,55.05,50.5],[114,106,114,53,0,55.05,50.5],[228,106,112,53,0,53.05,50.5],[340,106,109,53,0,50.05,50.5],[0,159,115,53,0,56.05,50.5],[115,159,115,53,0,56.05,50.5],[230,159,112,53,0,50.05,50.5],[342,159,115,53,0,53.05,50.5],[0,212,115,53,0,53.05,50.5],[115,212,115,53,0,53.05,50.5],[230,212,117,53,0,55.05,50.5],[347,212,117,53,0,55.05,50.5],[0,265,117,53,0,55.05,50.5],[117,265,117,53,0,55.05,50.5],[234,265,117,53,0,55.05,50.5],[351,265,117,53,0,55.05,50.5]],
        animations: {
            standRight: [0, 0, "standRight"],
            walkRight: [12, 23, "walkRight", .5],
            standLeft: [13, 13, "standLeft"],
            walkLeft: [0, 11, "walkLeft", .5]
            }     
        });
    
    walk = new createjs.Sprite(walkSheet);

    
}

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/images/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

