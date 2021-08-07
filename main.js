const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
var player_x = 30;
var player_y = 30;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}

function blockUpdate(get_Img){
    fabric.Image.fromURL(get_Img,function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    })
}