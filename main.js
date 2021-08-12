//const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");
var player_x = 30;
var player_y = 30;
var block_width = 30;
var block_height = 30;
var player_object = "";
var block_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
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

function blockUpdate(get_Img) {
    fabric.Image.fromURL(get_Img, function (Img) {
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

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift are pressed together")
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        if (block_width !== 0 && block_height !== 0) {
            console.log("m and shift are pressed together")
            block_width = block_width - 10;
            block_height = block_height - 10;
            document.getElementById("width").innerHTML = block_width;
            document.getElementById("height").innerHTML = block_height;
        }
    }

    if (keyPressed == '37'){
        console.log("left");
        left();
    }

    if (keyPressed == '38'){
        console.log("up");
        up();
    }

    if (keyPressed == '39'){
        console.log("right");
        right();
    }

    if (keyPressed == '40'){
        console.log("down");
        down();
    }

    if (keyPressed == '84'){
        blockUpdate("trunk.jpg");
        console.log("t")
    }

    if (keyPressed == '68'){
        blockUpdate("dark_green.png");
        console.log("d")
    }

    if (keyPressed == '76'){
        blockUpdate("light_green.png");
        console.log("l")
    }

    if (keyPressed == '71'){
        blockUpdate("ground.png");
        console.log("g")
    }

    if (keyPressed == '87'){
        blockUpdate("wall.jpg");
        console.log("w")
    }

    if (keyPressed == '89'){
        blockUpdate("yellow_wall.png");
        console.log("y")
    }

    if (keyPressed == '82'){
        blockUpdate("roof.jpg");
        console.log("r")
    }

    if (keyPressed == '67'){
        blockUpdate("cloud.jpg");
        console.log("c")
    }

    if (keyPressed == '85'){
        blockUpdate("unique.png");
        console.log("u")
    }
}

function up(){
    if (player_y > 0){
        player_y = player_y - block_height;
        console.log("block height ="+block_height);
        console.log("when up arrow is pressed, x ="+player_x+"| y ="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down(){
    if (player_y < 460){
        player_y = player_y + block_height;
        console.log("block height ="+block_height);
        console.log("when down arrow is pressed, x ="+player_x+"| y ="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function left(){
    if (player_x > 0){
        player_x = player_x - block_width;
        console.log("block width ="+block_width);
        console.log("when left arrow is pressed, x ="+player_x+"| y ="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function right(){
    if (player_x < 850){
        player_x = player_x + block_width;
        console.log("block width ="+block_width);
        console.log("when right arrow is pressed, x ="+player_x+"| y ="+player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}