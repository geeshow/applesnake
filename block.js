const stageBlock = {
    stage1:function() {
        var blocks = [];
        blocks[blocks.length] = {
            px:0
            , py:0
            , width:GAME_CONFIG.width
            , height:20
            , color:'black'
        };
        blocks[blocks.length] = {
            px:0
            , py:0
            , width:20
            , height:GAME_CONFIG.height
            , color:'black'
        };
        blocks[blocks.length] = {
            px:0
            , py:GAME_CONFIG.height - 20
            , width:GAME_CONFIG.width
            , height:20
            , color:'black'
        };
        blocks[blocks.length] = {
            px:GAME_CONFIG.width - 20
            , py:0
            , width:20
            , height:GAME_CONFIG.height
            , color:'black'
        };
        return blocks;
    }
    , stage2:function() {
        var blocks = this.stage1();
        blocks[blocks.length] = {
            px: Math.floor(GAME_CONFIG.width * 0.2)
            , py:Math.floor(GAME_CONFIG.width * 0.5)
            , width:Math.floor(GAME_CONFIG.width * 0.6)
            , height:GAME_CONFIG.blockSize
            , color:'gray'
        };
        return blocks;
    }
    , stage3:function() {
        var blocks = this.stage1();
        blocks[blocks.length] = {
            px:Math.floor(GAME_CONFIG.width * 0.2)
            , py:Math.floor(GAME_CONFIG.width * 0.3)
            , width:Math.floor(GAME_CONFIG.width * 0.6)
            , height:GAME_CONFIG.blockSize
            , color:'gray'
        };
        blocks[blocks.length] = {
            px:Math.floor(GAME_CONFIG.width * 0.2)
            , py:Math.floor(GAME_CONFIG.width * 0.6)
            , width:Math.floor(GAME_CONFIG.width * 0.6)
            , height:GAME_CONFIG.blockSize
            , color:'gray'
        };
        return blocks;
    }
    , stage4:function() {
        var blocks = this.stage3();
        blocks[blocks.length] = {
            px:Math.floor(GAME_CONFIG.width * 0.5)
            , py:Math.floor(GAME_CONFIG.width * 0.1)
            , width:GAME_CONFIG.blockSize
            , height:Math.floor(GAME_CONFIG.width * 0.1)
            , color:'black'
        };
        blocks[blocks.length] = {
            px:Math.floor(GAME_CONFIG.width * 0.5)
            , py:Math.floor(GAME_CONFIG.width * 0.5)
            , width:GAME_CONFIG.blockSize
            , height:Math.floor(GAME_CONFIG.width * 0.1)
            , color:'black'
        };
        blocks[blocks.length] = {
            px:Math.floor(GAME_CONFIG.width * 0.5)
            , py:Math.floor(GAME_CONFIG.width * 0.9)
            , width:GAME_CONFIG.blockSize
            , height:Math.floor(GAME_CONFIG.width * 0.1)
            , color:'black'
        };
        return blocks;
    }
    , stage5:function() {
        var blocks = [];
        for (var i = 0; i < 5; i++ ) {
            for (var k = 0; k < 5; k++ ) {
                blocks[blocks.length] = {
                    px:Math.floor(GAME_CONFIG.width * 0.2 * k) + GAME_CONFIG.blockSize
                    , py:Math.floor(GAME_CONFIG.width * 0.2 * i)
                    , width:GAME_CONFIG.blockSize
                    , height:GAME_CONFIG.blockSize * 3
                    , color:'black'
                };
            }

        }
        return blocks;
    }
    , stage6:function() {
        var blocks = [];
        for (var i = 0; i < 5; i++ ) {
            for (var k = 0; k < 5; k++ ) {
                blocks[blocks.length] = {
                    px:Math.floor(GAME_CONFIG.width * 0.2 * k) + GAME_CONFIG.blockSize
                    , py:Math.floor(GAME_CONFIG.width * 0.2 * i) + (GAME_CONFIG.blockSize * (k % 2) * 2)
                    , width:GAME_CONFIG.blockSize
                    , height:GAME_CONFIG.blockSize * 2
                    , color:'black'
                };
            }

        }
        return blocks;
    }
    , stage7:function() {
        var blocks = [];
        for (var i = 0; i < 5; i++ ) {
            for (var k = 0; k < 5; k++ ) {
                blocks[blocks.length] = {
                    px:Math.floor(GAME_CONFIG.width * 0.2 * k) + GAME_CONFIG.blockSize
                    , py:Math.floor(GAME_CONFIG.width * 0.2 * i) + (GAME_CONFIG.blockSize * (k % 2) * 2)
                    , width:GAME_CONFIG.blockSize
                    , height:GAME_CONFIG.blockSize * 3
                    , color:'black'
                };
            }

        }
        return blocks;
    }
    , stage8:function() {
        var blocks = this.stage3();
        for (var i = 0; i < 5; i++ ) {
            for (var k = 0; k < 5; k++ ) {
                blocks[blocks.length] = {
                    px:Math.floor(GAME_CONFIG.width * 0.2 * k) + GAME_CONFIG.blockSize
                    , py:Math.floor(GAME_CONFIG.width * 0.2 * i) + (GAME_CONFIG.blockSize * (k % 2) * 2)
                    , width:GAME_CONFIG.blockSize
                    , height:GAME_CONFIG.blockSize * 3
                    , color:'black'
                };
            }

        }
        return blocks;
    }
}
