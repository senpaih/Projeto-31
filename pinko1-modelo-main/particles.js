class part  {
constructor(x,y,r){
this.body= Bodies.circle(x,y,r,{restitution: 0.8})
this.color=color(random( 0,255),random( 0,255),random( 0,255))
this.r=r
World.add(world,this.body)
}
display(){
var Pos = this.body.position
var angle = this.body.angle 

push()
translate(Pos.x, Pos.y)
rotate(angle)
fill(this.color)
ellipseMode(RADIUS)
ellipse(0,0,this.r)
pop()

}



}