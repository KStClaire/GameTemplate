var GameStates = {
    MAIN_MENU:0,
    INSTRUCTIONS:10,
    PLAY_GAME:20,
    GAME_OVER:30
}

function changeState (gamestate) {
    switch(gamestate) {
        case GameStates.MAIN_MENU:
                stage.addChild(titleScreen);
                startGame();
            break;
        case GameStates.INSTRUCTIONS:
                stage.addChild(instructionScreen);

            break;
        case GameStates.PLAY_GAME:
                stage.addChild(backgroundScreen);
                playGame();
                

            break;
        case GameStates.GAME_OVER:
                stage.addChild(gameoverScreen);
                gameOver();
                displayScore();
            break;
        default:
            console.log("defaulted");
    }
}