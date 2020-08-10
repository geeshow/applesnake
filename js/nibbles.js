const PAGE_URL = '/applesnake/page';
const GAME_STAGE = document.querySelector('#game-stage');

(()=> {
    const gameIntro = new GamePage('game-intro');
    const gameSetup = new GamePage('game-setup');
    const gamePrepare = new GamePage('game-prepare');
    let Game = {
        INTRO: gameIntro,
        SETUP: gameSetup,
        PREPARE: gamePrepare,
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

    Game.goPage(gameIntro);


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
            case Game.INTRO :
                Game.goPage(Game.SETUP);
                break;
            case Game.SETUP :
                Game.SETUP.setupKeyHandler(e);
                if ( Game.SETUP.isFinishSetup() ) {
                    Game.goPage(Game.PREPARE)
                }
                break;
            default :
                break;
        }
    });

    window.addEventListener('load', ()=> {

    })
})()