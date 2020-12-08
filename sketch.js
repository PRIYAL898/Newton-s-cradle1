
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob;
var roof;
var chain;
var bodyA,bodyB;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(120,500,50);
	bob2=new Bob(240,500,50);
	bob3=new Bob(360,500,50);
	bob4=new Bob(480,500,50);
	bob5=new Bob(600,500,50);

	roof=new Roof(300,200,700,60);

	chain=new Chain(bob1.body,roof.body,bob2.body,roof.body,bob3.body,roof.body,bob4.body,roof.body,bob5.body,roof.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  chain.display();

  drawSprites();
 
}



