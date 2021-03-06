
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var boy,boyImage;
var stone;
var sling;
function preload(){
	boyImage = loadImage("plucking_mangoes/boy.png");
}
function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,450,800,10);
	tree = new Tree(600,260);
	mango1 = new Mango(600,210);
	mango2 = new Mango(500,250);
	mango3 = new Mango(550,150);
	mango4 = new Mango(700,190);
	mango5 = new Mango(750,250);
	mango6 = new Mango(650,110);
	mango7 = new Mango(470,190);
	mango8 = new Mango(650,270);

	stone = new Stone(100,340);

	sling = new Sling(stone.body,{x:110,y:350});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(255);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
  stone.display();
  
  sling.display();
  image(boyImage,150,400,130,200);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(stone,mango){
	
	stonePos = stone.body.position;
	mangoPos = mango.body.position;

	distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

	if(distance<=stone.radius+mango.radius){
		console.log("inside condition");
		Matter.Body.setStatic(mango.body,false);
	}
}

function keyPressed(){
	console.log("in key pressed");
	if(keyCode == 32){
		console.log("in condition");
		Matter.Body.setPosition(stone.body,{x:100,y:340});
		sling.attach(stone.body);
	}
}

