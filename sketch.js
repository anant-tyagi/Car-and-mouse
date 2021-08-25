var tom;
var jerry;

var bgImg;
var tomimg1,tomimg2,jerryimg1,jerryimg2,tomimg4,jerryimg4;
function preload() {
    //load the images here
tomimg1 = loadImage("images/cat1.png");
tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
jerryimg1 = loadImage("images/mouse1.png");
jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
bgImg = loadImage("images/garden.png");
tomimg4 = loadAnimation("images/cat4.png");
jerryimg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850,650,80,70);
    tom.addImage("cat",tomimg1);
    jerry = createSprite(100,650,20,60);
    jerry.addImage("mouse",jerryimg1);
    tom.scale = 0.2;
    jerry.scale = 0.1;
}

function draw() {

   background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x <(tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("cat",tomimg4);
        tom.x = 300;
        tom.changeAnimation("cat");
        jerry.addAnimation("mouse",jerryimg4);
        jerry.changeAnimation("mouse");
    }
    drawSprites();
}

   



function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    jerry.addAnimation("jerryTeasing",jerryimg2);
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDelay = 25;
    tom.velocityX = -5;
    tom.addAnimation("tomRunning",tomimg2);
    tom.changeAnimation("tomRunning");
}

}
