class Monster{
    constructor(x,y,r)
    {
        var options ={
        restitution:0,
           friction:1,
             density:1.2
        }
       
        this.x= x;
        this.y=y;
        this.r =r;

        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);

        this.image = loadImage("images/Monster-01.png")
        
        
        
        
    }
    display(){
        var pos =this.body.position;
        push()
        rectMode(CENTER)
        fill(200);
        stroke(200);
        ellipse(pos.x,pos.y,this.r,this.r);  
        imageMode(CENTER)
        image(this.image,pos.x-10,pos.y,180,160);
       pop()
    }
    }