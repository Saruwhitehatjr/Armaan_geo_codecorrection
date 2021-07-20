const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200,1000);
 	engine = Engine.create();
	myworld = engine.world;
    ham=new Hammer()
    stone=new Stone(70,70)
    stone2=new Stone(60,70)
    ground=new Ground(600,600,2000,20);  
    rub=new Rubber()
    s1=new Sand()
    s2=new Sand()
    s3=new Sand()
    s4=new Sand()
    s5=new Sand()
  }

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(338,164,21);
  ham.display()
  stone.display(300,200)
  stone2.display(800,300)
  ground.display();
  rub.display(700,300,60)
  s1.display(500,300,20)
  s2.display(560,300,25)
  s3.display(200,300,18)
  s4.display(900,300,20)
  s5.display(150,300,21)
  
  
  drawSprites();
 
}



