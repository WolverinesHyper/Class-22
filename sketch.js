
const Engine = Matter.Engine; // engine is like the universe
const World = Matter.World; // world is like the earth
const Bodies = Matter.Bodies; // bodies are the objects in the world

var engine1, world1, ground, ball;

function setup() {

  createCanvas(800,400);

  engine1 = Engine.create(); // engine1 created
  world1 = engine1.world; // world1 created inside engine1 
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400, 390, 800, 20, ground_options);
  World.add(world1, ground);
  var ball_options = {
    restitution: 0.9
  }
  ball = Bodies.circle(400, 100, 20, ball_options);
  World.add(world1, ball);
  
}

function draw() {

  background(255,255,255);  
  
  Engine.update(engine1);
  fill("green");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

  fill("red");
  circle(ball.position.x, ball.position.y, 20);

}