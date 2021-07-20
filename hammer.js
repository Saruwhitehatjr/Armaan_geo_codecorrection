class Hammer
{
    constructor()
    {
        var option={
            'friction': 1,
            'density':2
        }
        this.body=Bodies.rectangle(200,200,700,57,option);
        World.add(myworld,this.body);
        
        this.width=70;
        this.height=50;
    }

    display()
    {
        var pos=this.body.position;
        pos.x=mouseX
        pos.y=mouseY
        var angle=this.body.angle;
        push();
        fill("green") 
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(100,100,this.width,this.height);
        pop();     
    }
}