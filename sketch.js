var fixedRect, movingRect;
var wall, wall2, wall3;

function setup() {
  createCanvas(200,100);
  fixedRect=createSprite(190, 50, 10, 90);
  fixedRect.shapeColor="grey";
  movingRect=createSprite(200, 100, 10, 10);
  movingRect.shapeColor="green";
  wall=createSprite(50,50,10,50);
  wall.shapeColor="white";
  wall2=createSprite(100,50,10,50);
  wall2.shapeColor="white";
  wall3=createSprite(150,50,10,50);
  wall3.shapeColor="white";

}

function draw() {
  background("black");  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="blue";
  }
else{
  fixedRect.shapeColor="grey";
  movingRect.shapeColor="blue";
}
if(movingRect.isTouching(wall)){
  movingRect.shapeColor="green";
}
if(movingRect.isTouching(wall2)){
  movingRect.shapeColor="Brown";
}
if(movingRect.isTouching(wall3)){
  movingRect.shapeColor="red";
}
if(movingRect.isTouching(fixedRect)){
  movingRect.velocityX="0";
  movingRect.velocityY="0";
}

  drawSprites();
}