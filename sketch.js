
var trex, trex_running;
var ground;
var groundImg;
var invisibleGrnd;
var cloud, cloudImg;
var obstacle;
var ob1,ob2,ob3,ob4,ob5,ob6;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg = loadImage("ground2.png");
  cloudImg = loadImage("cloud.png");
  ob1 = loadImage("obstacle1.png");
  ob2 = loadImage("obstacle2.png");
  ob3 = loadImage("obstacle3.png");
  ob4 = loadImage("obstacle4.png");
  ob5 = loadImage("obstacle5.png");
  ob6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("trex_run", trex_running);
  trex.scale = 0.5;

  ground = createSprite(300, 180, 600, 5);
  ground.addImage("ground", groundImg);
  ground.velocityX = -4;

  invisibleGrnd = createSprite(300, 190, 600, 5);
  invisibleGrnd.visible = false;
}

function draw() {
  background("blue")

  if (keyDown("space") && (trex.y > 150)) {
    trex.velocityY = -10;
  }
  trex.velocityY += 0.8
  trex.collide(invisibleGrnd);

  if (ground.x < 0) {
    ground.x = ground.width / 2
  }
  console.log(frameCount)
  spawnClouds();
  spawnCactus();
  drawSprites();
}
function spawnClouds() {
  if (frameCount % 60 == 0) {
    cloud = createSprite(600, 100, 40, 10);
    cloud.velocityX = -3;
    cloud.y = Math.round(random(60, 160));
    cloud.addImage("cloud", cloudImg);
    cloud.scale = 0.5;
    trex.depth = cloud.depth + 1;
    cloud.lifetime = 200;
  }

}
function spawnCactus() {
  if (frameCount % 60 == 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    var choice = Math.round(random(1,6));
    switch(choice){
     case 1 : obstacle.addImage(ob1);
     break;
     case 2 : obstacle.addImage(ob2);
     break;
     case 3 : obstacle.addImage(ob3);
     break;
     case 4 : obstacle.addImage(ob4);
     break;
     case 5 : obstacle.addImage(ob5);
     break;
     case 6 : obstacle.addImage(ob6);
     break;
     default: break;
    }
    obstacle.scale = 0.4
    obstacle.lifetime = 150;
  }
}