class Tree{
    constructor(x,y){
        var options={
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,350,400,options);
        this.image= loadImage("plucking_mangoes/tree.png");
        this.x = x;
        this.y = y;
        this.width = 350;
        this.height = 400;

    }

    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}