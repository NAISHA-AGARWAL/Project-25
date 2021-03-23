const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObj,groundObject	
var engine, world;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	dustbinObj= new Dustbin(1200,650);
	paperObj= new Paper(200,450,70);
	groundObject= new Ground(width/2,670,width,20);
  Engine.run(engine);
}


function draw() {
  background("white");

  dustbinObj.display();
  paperObj.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
    
  	}
}