const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world;
var rider , riderRunning;
var enemies;
var ground;
var invisible_ground;
var backg, backImg;
var coins;



function preload(){
riderRunning = loadImage("rider1.png");
backImg = loadImage("bg.png");
}


function setup() {
 createCanvas(1000,800);

 rectMode(CENTER);
 engine = Engine.create();
 world = engine.world;

 backg = createSprite(0,200,10,10);
 backg.addImage(backImg);
 backg.scale = 2.8;

 rider = createSprite(100, 600, 50, 50);
 rider.addImage( riderRunning);
 rider.scale = 0.3;

 rider1 = new Rider(100,600,50);


 invisible_ground = createSprite(220,600,40000,10) ;
  invisible_ground.visible = true;
  invisible_ground.velocityX  = -5;

  Engine.run(engine);

}
  



function draw() {
  background(255,255,255); 
  rectMode(CENTER); 

  keyPressed();
  drawSprites();

rider.collide( invisible_ground);




}


function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(rider1.body , rider1.body.position ,{ x:0, y:-10 });
	}
}
