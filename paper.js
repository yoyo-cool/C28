class paper{

    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.35,
            friction:0.5,
            density:0.5
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius = radius
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("pink")
        circle(0,0,this.radius)
        pop()
    }
}