
var dustbin,leftwall,rightwall,paper1,ground1; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	dustbin= Bodies.rectangle(650, 700, 200,30,{isStatic:true} );

	leftwall = Bodies.rectangle(540,650,30, 150,{isStatic:true});
	rightwall = Bodies.rectangle(760,650, 30, 150,{isStatic:true} );
	World.add(world, dustbin);
	World.add(world, leftwall);
	World.add(world, rightwall);
   paper1= new paperclass(150,650,70);
 paper1.scale=2;

	//Create a Ground
	ground1= new groundclass(width/2, 650, width, 10);

	Engine.run(engine);
  
}


function draw() {
  
  background("yellow");
  Engine.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  fill("white")
  rect(dustbin.position.x,dustbin.position.y,200,30)
  fill("white")
    rect(leftwall.position.x,leftwall.position.y,30,150)
  fill("white")

  rect(rightwall.position.x,rightwall.position.y,30,150)
 paper1.display();
 ground1.display();
}

function keyPressed(){
if (keyCode==="space"){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
}	
}
