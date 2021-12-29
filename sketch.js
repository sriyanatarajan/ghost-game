var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group()
  climbersGroup=new Group()
  invisibleBlockGroup =new Group()
  ghost = createSprite(200,200,50,50)
  ghost.scale = 0.3
  ghost.addImage(ghostImg)

}

function draw() {
  background("black");
  
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3 
    }
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3 
    }
    if(keyDown("space")){
       ghost.velocityY = - 5
    }
    ghost.velocityY = ghost.velocityY+1
    spawndoors()
    drawSprites()
}
function spawndoors(){
  if(frameCount%240===0){
    var door= createSprite(200,-50)
    var climber= createSprite(200,10)
    var invisibleBlock = createSprite(200,15)
    invisibleBlock.debug = true
    invisibleBlock.width = climber.width
    invisibleBlock.height = 2
    climber.addImage(climberImg)
    door.addImage(doorImg)
    door.x = Math.round(random(120,400))
    climber.x = door.x
    climber.velocityY = 1
    invisibleBlock.x = door.x
    invisibleBlock.velocityY = +1
    invisibleBlock.lifetime = 800
    door.velocityY = 1 
    door.lifetime = 800
    climber.lifetime = 800
    doorsGroup.add(door)
    climbersGroup.add(climber)
    invisibleBlockGroup.add(invisibleBlock)

  }
}