
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground= new Ground(0,690,800,20); 
  wall1 = new Dustbin(600,600,20,100);
  wall2 = new Dustbin(700,600,20,100);
  wall3 = new Dustbin(600,670,100,20); 
  paper = new Paper(50,650);


	
  
}


function draw() {

  //rectMode(CENTER);
  background(0);  

  Engine.update(engine);

  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ground.display();
 
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}


}



