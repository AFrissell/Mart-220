class apple{

    constructor(appleX, appleY, appleSize, appleColor)
    {
        this.appleX = appleX;
        this.appleY = appleY;
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
draw()
{
    fill (this.appleColor);
    circle(this.appleX, this.appleY, this.appleSize);
}

}