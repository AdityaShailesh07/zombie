var Kennan,background,image1,ground

function preload(){
    image1 = loadImage("bg.png");



}
function setup(){
createCanvas(displayWidth,displayHeight)
    

    Background = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    //Background.addImage(image1);

    ground = createSprite(displayWidth/2,displayHeight-20,displayWidth,100);
    ground.shapeColor="green";
    obstaclesGroup = createGroup();



    Kennan = createSprite(displayWidth-100,displayHeight-150,100,200)
    Kennan.shapeColor="red";
    
}
function draw(){
background("black")

 spawnObstacles();

if(keyDown("right")){
Kennan.x+=4;

}
if(keyDown("left")){
    Kennan.x-=4;
    
    }
    if(keyDown("space") && Kennan.y>=500){
        Kennan.velocityY=-10;

        
        }
        Kennan.velocityY+=0.5
        Kennan.collide(ground);





    drawSprites();


}


function spawnObstacles(){
    if(frameCount % 100 === 0) {
        obstacle = createSprite(0,displayHeight-100,10,20);
        obstacle.velocityX = 6;
        obstacle.shapeColor="red"

        //add image to the obstacle 
       // obstacle.addImage(obstaceImage);
       // obstacle.scale=0.15;
        
        //lifetime to the obstacle     
        obstacle.lifetime = 300;
        
        //add each obstacle to the group
        obstaclesGroup.add(obstacle);
      }
    }