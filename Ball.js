class Ball {
    constructor(x,y,radius){
      var options={
        restitution:0.8,
        density:0.04,
        friction:1
      }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.body)
  
    }
  display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    ellipse(0,0,this.radius,this.radius)
    pop()
  }
  }
    
  