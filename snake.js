var GAME_CONFIG = {
      width:400
    , height:400
    , background:'green'
    , fps:100
    , GAME_STATE_READY:0
    , GAME_STATE_RUNNING:1
    , GAME_STATE_NEXTSTAGE:2
    , GAME_STATE_DIE:3
    , GAME_STATE_END:4
    , GAME_STATE:0
    , thisStage:1
    , score:0
    , eatapple:0
};

var snake = {
      width:10
    , height:10
    , head:0
    , dir:'stop'
    , speed:2
    , color:'blue'
    , position:[]
};

var apple = {
      px:30
    , py:30
    , width:10
    , height:10
    , color:'red'
    , showArea:0
};

var MY_CANVAS;
var CTX;
var inter;

window.addEventListener("load", onGameLoad, false);
window.addEventListener("keydown", onKeydown, false);
function onGameLoad() {
    document.getElementById('score').value = GAME_CONFIG.score;
    document.getElementById('eatapple').value = GAME_CONFIG.eatapple;
    
    MY_CANVAS = document.getElementById("canvas");
    CTX = MY_CANVAS.getContext("2d");
    GAME_CONFIG.GAME_STATE = GAME_CONFIG.GAME_STATE_READY;
    inter = setInterval(looper, 1000/GAME_CONFIG.fps);
}

function onGameStart() {
    GAME_CONFIG.thisStage = 1;
    GAME_CONFIG.score=0;
    GAME_CONFIG.eatapple=0;
    snake.dir = 'stop';
    snake.head = 0;
    snake.position = [{px:50, py:50}]; 
    showApple();
    GAME_CONFIG.GAME_STATE = GAME_CONFIG.GAME_STATE_RUNNING;
}

function looper() {
    if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_READY ) {
        CTX.fillStyle = GAME_CONFIG.background;
        CTX.fillRect(0,0,GAME_CONFIG.width,GAME_CONFIG.height);
        CTX.fillStyle = 'black';
        CTX.fillText("준비. SPACE BAR를 누르면 시작.", 100, 190);
    }
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_RUNNING ) {
        moveSnake();
        checkEatApple();
        var x = snake.position[snake.head].px;
        var y = snake.position[snake.head].py;
        var w = snake.width;
        var h = snake.height;
        checkHitBlock(x,y,w,h);
        drawScreen();
    } 
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_NEXTSTAGE ) {
        drawScreen();
        CTX.fillStyle = 'black';
        CTX.fillText(GAME_CONFIG.thisStage + "스테이지 클리어~!. SPACE BAR를 누르면 시작.", 100, 190);

    } 
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_DIE ) {
        drawScreen();
        CTX.fillStyle = 'black';
        CTX.fillText("You Die~! Game Over. SPACE BAR를 누르면 시작.", 100, 190);
    } 
    else if ( GAME_CONFIG.GAME_STATE == GAME_CONFIG.GAME_STATE_END ) {

    } 
}

function drawScreen() 
{
    // drawing background
    CTX.fillStyle = GAME_CONFIG.background;
    CTX.fillRect(0,0,GAME_CONFIG.width,GAME_CONFIG.height);

    // drawing snake tail
    CTX.fillStyle = snake.color;
    for ( var i = 0 ; i < snake.position.length ; i++ ) {
        CTX.fillRect(snake.position[i].px, snake.position[i].py, snake.width, snake.height);
    }

    // drawing snake head

    // drawing apple
    CTX.fillStyle = apple.color;
    CTX.fillRect(apple.px, apple.py, apple.width, apple.height);

    // drawing blocks
    var blocks = stageBlock["stage"+GAME_CONFIG.thisStage]();
    for ( var i = 0 ; i < blocks.length ; i++ ) {
        CTX.fillStyle = blocks[i].color;
        CTX.fillRect(blocks[i].px, blocks[i].py, blocks[i].width, blocks[i].height);
    }
}


function moveSnake() {
    if ( snake.dir == 'stop' ) 
        return;

    var movePx = 1 * snake.speed;
    snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
    snake.position.shift();
    switch ( snake.dir ) {
        case 'left' :
            snake.position[snake.head].px -= movePx;
            break;
        case 'right' :
            snake.position[snake.head].px += movePx;
            break;
        case 'up' :
            snake.position[snake.head].py -= movePx;
            break;
        case 'down' :
            snake.position[snake.head].py += movePx;
            break;

    }
}

function showApple() {
    var x ,y,w,h;
    switch (apple.showArea) {
        case 0 :
            x = 20 + Math.floor(Math.random() * 200);
            y = 20 + Math.floor(Math.random() * 200);
            break;
        case 1 :
            x = 200 + Math.floor(Math.random() * 180);
            y = 20 + Math.floor(Math.random() * 200);
            break;
        case 2 :
            x = 20 + Math.floor(Math.random() * 200);
            y = 200 + Math.floor(Math.random() * 180);
            break;
        case 3 :
            x = 200 + Math.floor(Math.random() * 180);
            y = 200 + Math.floor(Math.random() * 180);
            break;
    }
    apple.showArea = 0 + Math.floor(Math.random() * 3);

    if ( isHitBlock(x,y,apple.width,apple.height) ) {
        showApple();
    }
    else {
        apple.px = x;
        apple.py = y;
    }
}

function checkHitTail(x,y,w,h) {
    if ( isHitTail(x, y, w, h) ) {
        GAME_CONFIG.GAME_STATE = GAME_CONFIG.GAME_STATE_DIE;
    }
}

function checkHitBlock(x,y,w,h) {
    if ( isHitBlock(x, y, w, h) ) {
        GAME_CONFIG.GAME_STATE = GAME_CONFIG.GAME_STATE_DIE;
    }
}
 
function checkEatApple() {
    var x = snake.position[snake.head].px;
    var y = snake.position[snake.head].py;
    var w = snake.width;
    var h = snake.height;
    var tx = apple.px;
    var ty = apple.py;
    var tw = apple.width;
    var th = apple.height;
    if ( isHit(x, y, w, h, tx, ty, tw, th) ) {
        GAME_CONFIG.score++;
        document.getElementById('score').value = GAME_CONFIG.score;
        GAME_CONFIG.eatapple++;
        document.getElementById('eatapple').value = GAME_CONFIG.eatapple;

        if ( GAME_CONFIG.eatapple == 10 ) {
            GAME_CONFIG.GAME_STATE = GAME_CONFIG.GAME_STATE_NEXTSTAGE;
        }
        else {
            showApple();
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
            snake.position[snake.head+1] = {px:snake.position[snake.head].px, py:snake.position[snake.head].py};
            snake.head++;
        }
    }
}

function isHitTail(x,y,w,h) {
    for ( var i = 0 ; i < snake.position.length ; i++ ) {
        var tx = snake.position[i].px;
        var ty = snake.position[i].py;
        var tw = snake.width;
        var th = snake.height;
        if ( isHit(x, y, w, h, tx, ty, tw, th) ) {
            return true;
        }
    }
    return false;
}

function isHitBlock(x,y,w,h) {
    var blocks = stageBlock["stage"+GAME_CONFIG.thisStage]();
    for ( var i = 0 ; i < blocks.length ; i++ ) {
        var tx = blocks[i].px;
        var ty = blocks[i].py;
        var tw = blocks[i].width;
        var th = blocks[i].height;
        if ( isHit(x, y, w, h, tx, ty, tw, th) ) {
            return true;
        }
    }
    return false;
}

function isHit(x, y, w, h, tx, ty, tw, th) {
    if ( x + w >= tx && x <= tx + tw ) {
       if ( y + h >= ty && y <= ty + th ) {
           return true;
       }
    }
    return false;
}