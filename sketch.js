 var fighter_plane,Plane_img;
 var asteroids,asteroidsImg;
var earth,earthImg;
var bg,bgImg;

 function preload(){
  Plane_img=loadImage("fighter.plane.png");
  asteroidsImg=loadImage("asteroids.png");
  earthImg=loadImage("earth.png");
  bgImg=loadImage("background.jpg")
 }
 
 
 function setup() {
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(bgImg);

  fighter_plane=createSprite(displayWidth/2,displayHeight/2-100,20,20);
  fighter_plane.addImage(Plane_img);
  fighter_plane.scale=0.1;
  
  asteroids=createSprite(displayWidth/2,displayHeight/2-400,20,20);
  asteroids.addImage(asteroidsImg);
  asteroids.scale=0.1
 
  earth=createSprite(displayWidth/2,displayHeight/2+200,20,20);
  earth.addImage(earthImg);
  
  
}

function draw() {
  background(255,255,255,); 

  if(keyDown(LEFT_ARROW)){
    fighter_plane.x=fighter_plane.x-5;
}
if(keyDown(RIGHT_ARROW)){
  fighter_plane.x=fighter_plane.x+5;
}
  drawSprites();
}
