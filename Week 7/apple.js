
//apple class created here. Establishing location (appleX and appleY), size, and color.
class apple{

    constructor(appleX, appleY, appleSize, appleColor)
    {
        this.x = appleX;
        this.y = appleY;
        this.appleSize = appleSize
        this.appleColor = appleColor
        this.hspeed=3;
        this.vspeed=3;
    }
getImage()
{
    var myImage = loadImage(this.path)
    return myImage;
}
getX()
{
    return this.appleX;
}
getY()
{
    return this.appleY;
}
//function to actually draw the circles. 
draw()
{
    fill (this.appleColor);
    circle(this.x, this.y, this.appleSize);
}
//reverse directions. Update function defined here, used in draw in sketch. 
update()
{
    this.x+=this.hspeed;
    this.y+=this.vspeed;
    //maxX and maxY are dimensions of canvas. The balls will reverse speed once max x and y (and zero values)
    //are exceeded. Keeps fruit randomly bouncing around the canvas. 
    if(this.x>maxX)
    {
        this.hspeed*=-1;
    }
    if(this.y>maxY)
    {
        this.vspeed*=-1;
    }
    if(this.x<0)
    {
        this.hspeed*=-1;
    }
    if(this.y<0)
    {
        this.vspeed*=-1;
    }

}

}