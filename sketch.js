const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,1000);
 	engine = Engine.create();
	myworld = engine.world;
    ham=new Hammer()
    stone=new Stone(300,200,70,70)
    stone2=new Stone(800,300,60,70)
    ground=new Ground(600,600,2000,20);  
    rub=new Rubber(700,300,30)
    s1=new Sand(500,300,10)
    s2=new Sand(560,300,15)
    s3=new Sand(200,300,9)
    s4=new Sand(900,300,10)
    s5=new Sand(150,300,11)
  }

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(338,164,21);
  ham.display()
  stone.display()
  stone2.display()
  ground.display();
  rub.display()
  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()
  
  
  drawSprites();
 
}



