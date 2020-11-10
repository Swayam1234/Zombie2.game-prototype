var zombie1,zombie2,zombie3;
var player, gun;
var lasers=[];
var zombies=[];
var zombies1=[];
var zombies2=[];
var bg;
function preload(){
  playerImage = loadImage("Zombie/player.png");
  bg = loadImage('Zombie/Background.PNG');
}
function setup() {
 createCanvas(windowWidth,windowHeight);
 player = createSprite(width/2, height/2, 50, 50);
 player.scale=0.4
 player.addImage("player",playerImage);
 gun = new Gun(player.x,player.y);
 for (var i=0;i<10;i++){
   zombies.push(new Zombie());
 }
   for (var i=0;i<10;i++){
    zombies.push(new Zombie1());
}
for (var i=0;i<10;i++){
  zombies.push(new Zombie2());
}

 //zombie1 = new Zombie1(810, 350)
 
}

function draw() {
  background(bg);
  drawSprites();
  gun.display(player.x,player.y);
  if(keyDown(UP_ARROW)){
    player.y=player.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10;
  }

 //console.log(lasers);
  for(var i=lasers.length-1;i>=0; i--){
lasers[i].display();
lasers[i].update();
for(var j=zombies.length-1;j>=0;j--){
if(lasers[i].hit(zombies[j])){
  console.log("Hello World");
  //remove();
}
}
  }
  for(var i=0;i<zombies.length; i++){
    zombies[i].display();
    zombies[i].update();
    
      }
  /*for(var i=0;i<zombies1.length; i++){
    zombies1[i].display();
    zombies1[i].update();
       }
  for(var i=0;i<zombies2.length; i++){
   zombies2[i].display();
   zombies2[i].update();
    }*/

  
//zombie1.display();
  
}
function keyPressed(){
  if(keyCode === 32){
    //console.log("HI");
lasers.push(new Laser(gun.pos,gun.heading))
  }
}