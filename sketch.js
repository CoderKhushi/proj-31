const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drop,anim
var maxdrops=500
var back
var rand=Math.random(0,4)
function preload(){
   // anim=loadAnimation(walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png)
t1=loadImage(t1.png)
t2=loadImage(t2.png)
t3=loadImage(t3.png)
t4=loadImage(t4.png)

}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    drop=new Drop(random(10,400),30,10)
    gr=new Ground(180,580,600,10)
    fill("white")
    canvas.velocityY=0.2



}

function draw(){
    background("black")
    drop.display()    
Engine.update(engine)
gr.display()
if(frameCount%5===0){
   //drop.display()
thunderCreatedFrame=frameCount
thunder=createSprite(random(10,370),random(20,340),10,10)
switch(rand){
case 1:
thunder.addImage(t1)
break;
case 2:
thunder.addImage(t2)
break;
case 3:
thunder.addImage(t3)
break;
case 4:
thunder.addImage(t4)
break;
default: 
break;
}

//thunder.scale(Math.random(0.3,0.6))


}

}
 


for(var i=0;i<maxdrops;i++){
       
    drop.push(new Drop(random(0,400),random(0,400)))
    
    } 

