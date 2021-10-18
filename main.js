var canvas=new fabric.Canvas("myCanvas")
player_x=10;
player_y=10;
block_width=30;
block_height=30;
block_object="";
player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({top:player_y,left:player_x})
        canvas.add(player_object)
    })
}
function newImage(img_name){
    fabric.Image.fromURL(img_name,function(Img){
        block_object=Img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({top:player_y,left:player_x})
        canvas.add(block_object);

       
    })
}
player_update()
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == "37"){
        left();
    }
    if(keypressed == "38"){
        up();
    }
    if(keypressed == "39"){
        right();

    }
    if(keypressed == "40"){
        down();
    }
    if(keypressed == "67"){
        newImage("cloud.jpg")
    }
    if(keypressed == "68"){
        newImage("dark_green.png")
    }
if(keypressed == "71"){
    newImage("ground.png")
}
if(keypressed == "76"){
    newImage("light_green.png")
}
if(keypressed == "82"){
    newImage("roof.jpg")
}
if(keypressed == "84"){
    newImage("trunk.jpg")
}
if(keypressed == "85"){
    newImage("unique.png")
}
if(keypressed == "87"){
    newImage("wall.jpg")
}
if(keypressed == "89"){
    newImage("yellow_wall.png")
}
if(e.shiftKey == true && keypressed == '80'){
    console.log(block_width);
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("blockwidth").innerHTML=block_width;
    document.getElementById("blockheight").innerHTML=block_height;
   

}
if(e.shiftKey == true && keypressed == "77"){
    console.log(block_width);
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("blockwidth").innerHTML=block_width;
    document.getElementById("blockheight").innerHTML=block_height;
    
}
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update()
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update()
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update()
    }
}
function right(){
    if(player_x<=900){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update()
    }
}



