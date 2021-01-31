var canvas;
var music;
var b1;
var b2;
var b3;
var b4;
var mb;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1 = createSprite(90,550,180,20);
b1.shapeColor="yellow"
b2 = createSprite(290,550,180,20);
b2.shapeColor="red"
b3 = createSprite(490,550,180,20);
b3.shapeColor="blue"
b4 = createSprite(690,550,180,20);
b4.shapeColor="green"


    //create box sprite and give velocity
    mb = createSprite(random(100,700),random(70,500),random(20,40),random(20,40));
    var rand = Math.round(random(1,6));
    switch(rand) {
    case 1:mb.velocityY=-4;
    break;
    case 2:mb.velocityY=-3;
    break;
    case 3:mb.velocityY=-2;
    break;
    case 4:mb.velocityY=4;
    break;
    case 5:mb.velocityY=3;
    break;
    case 6:mb.velocityY=4;
    break;
    default: break;
    }

    var randy = Math.round(random(1,6));
    switch(randy) {
    case 1:mb.velocityX=-4;
    break;
    case 2:mb.velocityX=-3;
    break;
    case 3:mb.velocityX=-2;
    break;
    case 4:mb.velocityX=4;
    break;
    case 5:mb.velocityX=3;
    break;
    case 6:mb.velocityX=4;
    break;
    default: break;
    }

    if(isTouching(mb,b1)){
    mb.shapeColor = "yellow";
    b1.shapeColor = "yellow";
    }
    else{
    mb.shapeColor = "gray";
    b1.shapeColor = "yellow";
    }

   if(isTouching(mb,b2)){
   mb.shapeColor = "red";
   b2.shapeColor = "red";
   }
   else{
   mb.shapeColor = "gray";
   b2.shapeColor = "red";
   }

        if(isTouching(mb,b3)){
            mb.shapeColor = "blue";
            b3.shapeColor = "blue";
            }
            else{
            mb.shapeColor = "gray";
        b3.shapeColor = "blue";
            }

            if(isTouching(mb,b4)){
                mb.shapeColor = "green";
                b4.shapeColor = "green";
                }
                else{
                mb.shapeColor = "gray";
            b4.shapeColor = "green";
                }

    mb.bounceOff(b1);
    mb.bounceOff(b2);
    mb.bounceOff(b3);
    mb.bounceOff(b4);

}

function draw() {
    background(rgb(255,255,255));
    //create edgeSprite
edges=createSprite;


    //add condition to check if box touching surface and make it box
drawSprites();
}

function isTouching(o1,o2){
if ( o1.x - o2.x < o1.width/2 + o2.width/2
&& o2.x - o1.x < o1.width/2 + o2.width/2 
&& o2.y - o1.y < o1.height/2 + o2.height/2
&& o1.y - o2.y < o1.height/2 + o2.heigth/2 ){
return true;
}
else{
return false;
}
}