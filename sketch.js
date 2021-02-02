const Engine     = Matter.Engine;
const Bodies     = Matter.Bodies;
const World      = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var ground1;
var hero1;
var fly1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var monster1;

function preload() {
//preload the images here

backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 700);

  engine = Engine.create();
  world = engine.world;

  // create sprites here
  ground1 = new ground(450,700,900,20);

  hero1 = new hero(200,300,200);

  fly1 = new fly(hero1.body,{x:200,y:300});

  block1 = new block(400,300,80,80);
  block2 = new block(400,300,80,80);
  block3 = new block(400,300,80,80);
  block4 = new block(400,300,80,80);
  block5 = new block(400,300,80,80);

  block6 = new block(550,30,80,80);
  block7 = new block(550,30,80,80);
  block8 = new block(550,30,80,80);
  block9 = new block(550,30,80,80);
  block10 = new block(550,30,80,80);
  block11 = new block(550,30,80,80);
  block12 = new block(550,30,80,80);

  monster1 = new monster(800,300,200);


  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);

  ground1.display();

  hero1.display();

  fly1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  monster1.display();




}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  fly1.fly();
}

