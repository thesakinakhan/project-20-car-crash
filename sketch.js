var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,130);
  weight=random(400,1500);

  wall=createSprite(1500, 200, 400, 350);
  wall.shapeColor=(80,80,80);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;


}

function draw() {
  background(0);  

 if(wall.x-car.x<(car.width+wall.width)/2){
   car.velocityX=0;
   //def=deformation
   var def=0.5*weight*speed*speed/22509;
   if(def<80){
     car.shapeColor=color(0,255,0);
   }
   
   if( def>80 && def<180){
     car.shapeColor=color(230,230,0);
   }

   if(def>180){
    car.shapeColor=color(255,0,0);
   } 
   
  }

  drawSprites();
}