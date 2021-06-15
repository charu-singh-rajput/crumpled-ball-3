class Launcher
{
    constructor(bodyA,pointB,offX,offY)
    {
        this.offX=offX;
        this.offY=offY;
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB=pointB;
        this.launch=Constraint.create(options);
        World.add(world,this.launch);
    }
    display()
    {
        if(this.launch.bodyA!=null)
        {
            var posA=this.launch.bodyA.position;
            var posB=this.pointB;
            strokeWeight(4);
            fill(0)
            line(posA.x-25,posA.y-15,posB.x+this.offX,posB.y+this.offY);
        
        }
    }
    detach()
    {
        this.launch.bodyA=null;
    }
}