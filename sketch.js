var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1500, 200, 60, 800);
  
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed;
  deformation=0.5*speed*speed/22500;
  if(deformtion<=100){
  car.shapeColor=green;
  }else if(deformation>100 && deformation< 180){
  car.shapeColor=yellow;
}else if(deformation>180){ 
car.shapeColor=red;
}
  drawSprites();
}