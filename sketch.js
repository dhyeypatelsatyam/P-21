const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1,wall2,wall3,wall4;
var ground,ground1,ground2;


function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  wall1=new Wall(350,200,20,100)
  wall1=new Wall(350,200,20,100)
}
function draw(){
  background(0);
  Engine.update(engine);
  wall1.display()
}
