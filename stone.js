class Stone
{
    constructor(c,d)
    {
        var option={
            'restitution' : 0.4,
            'friction': 1.5,
            'density':1.8
        }
        this.body=Bodies.rectangle(15,34,45,67,option);
        World.add(myworld,this.body);
        
        this.width=c;
        this.height=d;
    }

    display(a,b)
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("black") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(a,b,this.width,this.height);
        pop();     
    }
}