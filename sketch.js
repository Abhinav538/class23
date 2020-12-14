//creating all constant and user defined variables
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    //creation of canvas and canvas size 
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //box with specific properties
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    //ground with specific properties
    ground = new Ground(200,height,400,20);
   

    
}

function draw(){
    //black background
    background(0);
    Engine.update(engine);
    //display boxes and ground
    box1.display();
    box2.display();
    ground.display();


   
}