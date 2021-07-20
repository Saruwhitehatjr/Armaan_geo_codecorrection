class Rubber
{
    constructor()
    {
        var option={
            'restitution' : 1,
            'friction': 1.5,
            'density':0.8
        }
        this.body=Bodies.circle(15,34,45,option);
        World.add(myworld,this.body);
    }

    display(a,b,c)
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        fill("blue") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        circle(a,b,c);
        pop();     
    }
}