class Stone
{
    constructor(a,b,c,d)
    {
        var option={
            'restitution' : 0.4,
            'friction': 1.5,
            'density':1.8
        }
        this.body=Bodies.rectangle(a,b,c,d,option);
        World.add(myworld,this.body);
        
        this.width=c;
        this.height=d;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("black") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();     
    }
}