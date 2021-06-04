class dustbin{

    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitutuion:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height, options)
        this.width= 20;
        this.height=100;

        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position
        rectMode(CENTER)
        fill(255)
        rect(pos.x,pos.y, this.width, this.height)
    }

    }