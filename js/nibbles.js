const PAGE_URL = '/applesnake/page';
const GAME_STAGE = document.querySelector('#game-stage');

(()=> {
    const gameIntro = new GamePage('game-intro');
    const gameSetup = new GamePage('game-setup');
    let Game = {
        INTRO: gameIntro,
        SETUP: gameSetup,
        INIT: 300,
        STAGE: 400,
        CURRENT: gameIntro,
        goPage: function(target) {
            console.log('this.CURRENT', this.CURRENT)
            this.CURRENT.hide();
            target.show();
            this.CURRENT = target;
        },
    }

    gameIntro.show();


    // Object.defineProperty(Game, 'state', {
    //     get: function() {
    //
    //     },
    //     set: function(state) {
    //
    //         }
    //     }
    // } )

    window.addEventListener('keypress', (e)=> {
        console.log('keypress', e.key, Game.CURRENT, Game.INTRO);
        switch ( Game.CURRENT ) {
            case Game.INTRO :
                Game.goPage(Game.SETUP);
                break;
            default :
                break;
        }
    });

    window.addEventListener('load', ()=> {

    })
})()