
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Body = Matter.Body;

var paperObj,paperObj2,paperObj3,paperObj4, groundObj,roofObj;
var chain1,chain2,chain3,chain4;
var bobDiameter = 1;
function setup() {
	createCanvas(800, 500);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj = new paper(280,50,40);
    paperObj2 = new paper(300,50,40);
    paperObj3 = new paper(340,50,40);  
	paperObj4 = new paper(380,50,40);
	groundObj= new ground(width/2,500,width,20);
	roofObj =  new roof(300,10,600,30);
    chain1 = new chain(roofObj,paperObj,bobDiameter*2,0);
	chain2 = new chain(roofObj,paperObj2,bobDiameter*2,0);
	chain3 = new chain(roofObj,paperObj3,bobDiameter*2,0);
	chain4 = new chain(roofObj,paperObj4,bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
 // Engine.update(engine);
  
  paperObj.display();
  paperObj2.display();
  paperObj3.display();
  paperObj4.display();
  groundObj.display();
  roofObj.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:60,y:-60});
  
	}
}




// constructor(bodyA,bodyB,offsetX,offsetY){
// 	this.offsetX = offsetX
// 	this.offsetY = offsetY
	
// 	var options={
	
// 	  bodyA:bodyA,
// 	  bodyB:bodyB,
// 		pointB:{x:this.offsetX,y:this.offsetY}
// 	}
	
//  this.bodyB = bodyB;

// 	this.chain = Constraint.create(options);
// 	World.add(world, this.chain);
	


// 	this.chain.bodyA = null;
// 	}
	
// 	display () {
	
// 		this.chain
	
	
// 	if(this.bodyA){
// 		var pointA = this.bodyA.position;
// 		var pointB = this.pointB;
// 		strokeWeight(4);
// 		line(pointA.x, pointA.y, pointB.x, pointB.y);
	
// 	}
	

// }