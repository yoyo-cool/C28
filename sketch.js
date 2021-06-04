
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1= new dustbin(750,500,20,100)
	box2= new dustbin(920,500,20,100)
	box3= new dustbin1(835,540,100,20)
	paper1=new paper(80,500,25)
	ground=new Ground(width/2,600,width,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display()
  box2.display()
  box3.display()
  ground.display()
  paper1.display()
  drawSprites();

}


function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:85})
	}
}