var stageBlock = {
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
            px:100
            , py:200
            , width:200
            , height:20
            , color:'black'
        };
        return blocks;
    }
    , stage3:function() {
        var blocks = this.stage1();
        blocks[blocks.length] = {
            px:100
            , py:120
            , width:200
            , height:20
            , color:'black'
        };
        blocks[blocks.length] = {
            px:100
            , py:280
            , width:200
            , height:20
            , color:'black'
        };
        return blocks;
    }
}
