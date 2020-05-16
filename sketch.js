const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var bow;
var arrow;
var mango1,mango2,mango3;
var backgroundImg;

var score=0;

function preload(){
backgroundImg= loadImage("images/download.jpg");
}

function setup() {
  createCanvas(1600,789);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,789,1600,14);
  arrow=new Arrow(235,377,200,100);
  bow = new Bow(arrow.body,{x:235,y:377});
  mango1=new Mango(1450,390,100,100);
  mango2=new Mango(1325,190,100,100);
  mango3=new Mango(1325,590,100,100);
 }

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  noStroke();
  textSize(35);
  fill("white");
  text("Score  " + score, width-300, 50);

 
  ground.display();  
  arrow.display();
  bow.display();
  mango1.display();
  mango1.score();
  mango2.display();
  mango2.score();
  mango3.display();
  mango3.score();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  bow.fly();
 }
 function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(arrow.body,{x:235,y:377});
        bow.attach(arrow.body);
    }
}



