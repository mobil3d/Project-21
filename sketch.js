var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50, 200, 20, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = color(355,355,355);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80); 
  
  
}

function draw() {
  background(0,0,0);  

 



if(hasCollided(bullet,wall)){

  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed/(thickness * thickness);


  if(damage>10){
      wall.shapeColor = color(255,0,0);
  }


  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
}



 drawSprites();
  }


function hasCollided(Lbullet, Lwall){
    Lbullet = lbullet.x + Lbullet.width;
    Lwall = Lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }  
return false;
}

