function GamePage(domId, loop = 0) {
    this.domId = domId;
    this.DOM = null;

    this.questionNumber = 1;
    this.setupData = {
        players: 1,
        level: 1,
        increaseYN : 'Y',
        colorMode: 'C'
    }
    if ( !domId || loop > 0 ) return false;

}

GamePage.prototype.appendHtml = function() {
    const that = this;
    axios.get(`${PAGE_URL}/${this.domId}.html`)
        .then(function(response) {
            GAME_STAGE.innerHTML += response.data;
            that.show(true);
        })
}
GamePage.prototype.show = function(loop = false) {
    if ( !this.DOM && !loop) {
        this.appendHtml();
        return;
    }

    console.log('show', this.domId, this.DOM);
    this.DOM = document.querySelector(`#${this.domId}`);
    this.DOM.style.opacity = '100';
}

GamePage.prototype.hide = function() {
    console.log('hide', this.DOM);
    this.DOM.style.opacity = '0';
}

GamePage.prototype.toString = function() {
    return this.domId;
}

GamePage.prototype.setupKeyHandler = function(e) {
    if ( e.key === 'Enter') {
        const answer = document.querySelector(`#answer${this.questionNumber}`).innerHTML;
        switch (this.questionNumber) {
            case 1 :
                if ( answer === '1' || answer === '2' ) {
                    this.setupData.players = answer;
                    this.showNextQuestion();
                }
                else this.removeAnswer();
                break;
            case 2 :
                if ( parseInt(answer) >= '0' && parseInt(answer) <= '100' ) {
                    this.setupData.level = answer;
                    this.showNextQuestion();
                }
                else this.removeAnswer();
                break;
            case 3 :
                if ( answer.toUpperCase() === 'Y' || answer.toUpperCase() === 'N' ) {
                    this.setupData.increaseYN = answer;
                    this.showNextQuestion();
                }
                this.removeAnswer();
                break;
            case 4 :
                if ( answer.toUpperCase() === 'M' || answer.toUpperCase() === 'C' ) {
                    this.setupData.colorMode = answer;
                    this.finishSetup();
                }
                else this.removeAnswer();
                break;
        }
    }
    else if ( e.key === 'Backspace') {
        const html = document.querySelector(`#answer${this.questionNumber}`).innerHTML;
        document.querySelector(`#answer${this.questionNumber}`).innerHTML = html.slice(0, -1);
    }
    else if ( e.key >= '0' && e.key <= '9' ) {
        document.querySelector(`#answer${this.questionNumber}`).innerHTML += e.key;
    }
    else if ( e.key >= 'a' && e.key <= 'z' ) {
        document.querySelector(`#answer${this.questionNumber}`).innerHTML += e.key;
    }

    return this.isFinishSetup();
}

GamePage.prototype.stageKeyHandler = function(e) {
    if ( e.code === 'Space') {
        const messageDOM = document.querySelector('.game-message-con');
        [...Array(40).keys()].forEach((item, index) => {
            const cube = document.createElement('div');
            cube.className = 'game-message-hide-cube';
            cube.style.animationDelay = `${index/20}s`
            messageDOM.appendChild(cube);
        })
    }
}

GamePage.prototype.showNextQuestion = function() {
    document.querySelector(`#cursor${this.questionNumber}`).remove();
    this.questionNumber++;
    document.querySelector(`.question-con-item${this.questionNumber}`).style.display = 'flex';
}

GamePage.prototype.finishSetup = function() {
    this.questionNumber = 0;
}

GamePage.prototype.isFinishSetup = function() {
    return this.questionNumber == 0;
}

GamePage.prototype.removeAnswer = function() {
    document.querySelector(`#answer${this.questionNumber}`).innerHTML = '';
}