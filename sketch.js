
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	bobObject1= new Bob (250,400);
	bobObject2= new Bob (310,400);
	bobObject3= new Bob (370,400);
	bobObject4= new Bob (430,400);
	bobObject5= new Bob (490,400);

	roof1=new Roof (375,100,400,35);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof1.display();

  drawSprites();
 
}



