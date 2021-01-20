class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.04,
            length: 300
        }
        this.fly = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.fly);

    }

    


    display(){
    
        
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
        push()
        stroke(0)
        strokeWeight(1)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop()
   
    
        
    }
    
}



