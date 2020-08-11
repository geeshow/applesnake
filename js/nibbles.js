const PAGE_URL = '/applesnake/page';
const GAME_STAGE = document.querySelector('#game-stage');

(()=> {
    const gameIntro = new GamePage('game-intro');
    const gameSetup = new GamePage('game-setup');
    const gamePrepare = new GamePage('game-prepare');
    const gameStage = new GamePage('game-stage');
    let Game = {
        PAGE_INTRO: gameIntro,
        PAGE_SETUP: gameSetup,
        PAGE_PREPARE: gamePrepare,
        PAGE_STAGE: gameStage,
        INIT: 300,
        STAGE: 400,
        CURRENT: null,
        goPage: function(target) {
            console.log('this.CURRENT', this.CURRENT)
            if ( this.CURRENT ) this.CURRENT.hide();
            target.show();
            this.CURRENT = target;
        },
    }

    Game.goPage(gameStage);


    // Object.defineProperty(Game, 'state', {
    //     get: function() {
    //
    //     },
    //     set: function(state) {
    //
    //         }
    //     }
    // } )

    window.addEventListener('keydown', (e)=> {
        switch ( Game.CURRENT ) {
            case Game.PAGE_INTRO :
                Game.goPage(Game.PAGE_SETUP);
                break;
            case Game.PAGE_SETUP :
                Game.PAGE_SETUP.setupKeyHandler(e);
                if ( Game.PAGE_SETUP.isFinishSetup() ) {
                    Game.goPage(Game.PAGE_PREPARE)
                    setTimeout(() => {Game.goPage(Game.PAGE_STAGE)}, 3000);
                }
                break;
            case Game.PAGE_STAGE :
                Game.PAGE_STAGE.stageKeyHandler(e);
                break;
            default :
                break;
        }
    });

    window.addEventListener('load', ()=> {

    })
})()