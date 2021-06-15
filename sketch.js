
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,world;
var ground;

var leftBox,rightBox,downBox;
var dustbinImg;
var shot;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	ball=new Paper(100,300,70);
	ground=Bodies.rectangle(400,600,800,20,{isStatic:true});
	World.add(world,ground);


	downBox=new Box(720, 585, 140, 10);

	leftBox=new Box(650, 510, 10, 140);

	rightBox=new Box(785, 510, 10, 140);

	
	//dustbinImg.scale=0.1;

	shot=new Launcher(ball.body,{x:300,y:300},-20,-50);
	console.log(ball.body);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(170);
  shot.display();
  downBox.display();
  leftBox.display();
  rightBox.display();
  imageMode(CENTER);
  image(dustbinImg,694,500,140,140);
  
 // paperSprite.x=ball.position.x;
  //paperSprite.y=ball.position.y;
  fill(0);
  rect(ground.position.x,ground.position.y-20,800,20);
  ball.display();
  
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

function mouseDragged()
{
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	shot.detach();
}



