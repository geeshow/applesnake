function GamePage(domId, loop = 0) {
    this.domId = domId;
    this.DOM = null;
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