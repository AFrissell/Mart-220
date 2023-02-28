
//apple class created here. Establishing location (appleX and appleY), size, and color.
class apple{

    constructor(appleX, appleY, appleSize, appleColor)
    {
        this.x = appleX;
        this.y = appleY;
        this.appleSize = appleSize
        this.appleColor = appleColor
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

}