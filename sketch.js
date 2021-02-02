//Initialising variables for sprites
var car;
var wall;

//Initialising variables for parameters
var weight,speed,deformation;

function setup() {
  createCanvas(1000, 400);

  weight = Math.round(random(400,1500));
  speed = Math.round(random(55,90));
  deformation = Math.round((0.5 * weight * speed * speed)/22500);

  wall = createSprite(900,200,60,200);
  wall.shapeColor = (80,80,80);

  car = createSprite(60,200,50,50);
  car.velocityX = speed;
}


function draw() {
  background("black");

  textSize(18);
  text("Weight: " + weight,500,20);
  text("Speed: " + speed,500,40);
  text("Deformation: " + deformation,650,20);

  touch();

  drawSprites();
}

function touch(){
  if((car.x-wall.x<=wall.width/2+car.width/2 
    && wall.x-car.x<=wall.width/2+car.width/2) 
    && (car.y-wall.y<=wall.height/2+car.height/2 
    && wall.y-car.y<=wall.height/2+car.height/2)){
      
    car.velocityX = 0;

    if(deformation < 80){
      car.shapeColor = ("green");
      text("Collision Rating: GOOD",400,200);
    }else if(deformation >= 80 && deformation < 180){
      car.shapeColor = ("yellow");
      text("Collision Rating: AVERAGE",400,200);
    }else{
      car.shapeColor = ("red");
      text("Collision Rating: LETHAL",400,200);
    }

  }
}