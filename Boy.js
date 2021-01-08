class Boy{
    constructor(x,y){
        var options = {
            isStatic :true
        }
        this.body = Bodies.rectangle(x,y,100,200);
        this.width=100;
        this.height = 200;
        this.image = loadImage("plucking_mangoes/boy.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}