const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImage,chain;
var hero,heroI;

function preload() {
bgImage = loadImage("images/GamingBackground.png")
heroI = loadImage("images/Superhero-01.png")
}

function setup() {
  var canvas = createCanvas(3000, 800);

engine = Engine.create();
world = engine.world;

ground = new Ground(50,500,1800,15)

hero = Bodies.circle(320,300,70,{restitution:0.3,density:1.2})
World.add(world,hero)



 chain = Constraint.create({bodyA:hero,pointB:{x:320,y:10},stiffness:0.5,length:300})
 World.add(world,chain)

 monster = new Monster(850,100,80)

 box1 = new Block(500,100,50,50)
 box2 = new Block(500,100,50,50)
 box3 = new Block(500,100,50,50)
 box4 = new Block(500,100,50,50)
 box5 = new Block(500,100,50,50)
 box6 = new Block(500,100,50,50)
 box7 = new Block(500,100,50,50)

 box8 = new Block(580,100,50,50)
 box9 = new Block(580,100,50,50)
 box10 = new Block(580,100,50,50)
 box11= new Block(580,100,50,50)
 box12= new Block(580,100,50,50)
 box13= new Block(580,100,50,50)

 box14 = new Block(660,100,50,50)
 box15 = new Block(660,100,50,50)
 box16 = new Block(660,100,50,50)
 box17 = new Block(660,100,50,50)
 box18 = new Block(660,100,50,50)
 box19= new Block(660,100,50,50)
 box20= new Block(660,100,50,50)
 box21= new Block(660,100,50,50)

 box22 = new Block(740,100,50,50)
 box23 = new Block(740,100,50,50)
 box24= new Block(740,100,50,50)
 box25= new Block(740,100,50,50)
 box26= new Block(740,100,50,50)
}

function draw() {
background(bgImage);
Engine.update(engine)

push()
strokeWeight(0)
line(hero.position.x,hero.position.y,350,10)
pop()

push()
fill(75, 85, 87)
circle(hero.position.x,hero.position.y,70)
image(heroI,hero.position.x-120,hero.position.y-70,260,150);
pop()

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();

box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

box22.display();
box23.display();
box24.display();
box25.display();
box26.display();

monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero,{x:mouseX,y:mouseY})
}
