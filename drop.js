class Drop{
constructor(x,y){
var options = {
           
    restitution :0.8,
    friction :0.1,
    density:0.3
}
this.body=Bodies.rectangle(x,y,options)
World.add(world,this.body)
this.body.velocity.x=0
this.body.velocity.y=-1
}
display(){
ellipse(random(0,400),30,10)
}
}