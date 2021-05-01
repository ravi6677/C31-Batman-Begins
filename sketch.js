const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder, thunder1, thunder2, thunder3, thunder4;

var engine, world;
var drops = [];
var createDrops;
var rand;
var maxDrops = 100;


function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(400, 700);
   umbrella = new Umbrella(200, 500);
    
   if(frameCount % 150 === 0){
      for(var i=0; i<maxDrops; i++){
          drops.push(new Drops(random(0,400), random(0,400)));
      }
  }
}

function draw(){
    Engine.update(engine);
    background("black");

    for(var i = 0; i<maxDrops; i++){
      drops[i].showDrops();
      drops[i].updateY()
      
  }

  umbrella.display();
  
} 

drawSprites();

