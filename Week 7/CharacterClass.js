//Establishing imageclass array, to cycle through character animation. Delcares the path, 
//the location (x and y) and width and height,
class imageClass{

    constructor(path, x, y, w, h)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.w =w;
        this.h =h;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    getW()
    {
        return this.w;
    }
    getH()
    {
        return this.h;
    }
}



