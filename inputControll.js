var keyCode = {

}
function onKeydown(e) {
    if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_READY ) {
        switch ( e.keyCode ) {
            case 32 : // space
                onGameStart();
                break;
        }
    }
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_RUNNING ) {
        switch ( e.keyCode ) {
            case 37 : // LEFT
                if ( snake.dir != 'right' )
                    snake.dir = 'left';
                break;
            case 39 : // RIGHT
                if ( snake.dir != 'left' )
                    snake.dir = 'right';
                break;
            case 38 : // up
                if ( snake.dir != 'down' )
                    snake.dir = 'up';
                break;
            case 40 : // down
                if ( snake.dir != 'up' )
                    snake.dir = 'down';
                break;
            case 32 : // space
                snake.dir = 'stop';
                break;
        }
    }
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_NEXTSTAGE ) {
        switch ( e.keyCode ) {
            case 32 : // space
                GAME_CONFIG.thisStage++;
                GAME_CONFIG.eatapple = 0;
                snake.position = [{px:50, py:50}]; 
                snake.head = 0;
                snake.dir = 'stop';
                showApple();
                GAME_CONFIG.GAME_STATE = GAME_CONFIG.GAME_STATE_RUNNING;
                break;
        }
    }
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_DIE ) {
        switch ( e.keyCode ) {
            case 32 : // space
                onGameStart();
                break;
        }
    }
}
