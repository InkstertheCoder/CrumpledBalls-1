class Paper{
//to define the x and y to write in sketch.js
constructor(x,y){

var options = {

isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2

}
this.body = Bodies.circle(x,y,30,options);
this.radius = 30;
World.add(world,this.body);
}
display(){

 var pos = this.body.position;
 fill("pink");
 ellipse(pos.x,pos.y,30);
 



}



}