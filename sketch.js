
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper, d1,d2,d3,ground


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,400,20);
	paper.shapeColor ="magenta";
	ground = new Ground (400,670,800,20);
	d1 = new Dustbin (400,620,20,100);
	d2 = new Dustbin (500,660,200,20);
	d3 = new Dustbin (600,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  d1.display();
  d2.display();
  d3.display();
  paper.display();
  ground.display();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85} )
	}
}



