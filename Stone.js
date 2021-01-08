class Stone{
    constructor(x,y){
        var options = {
            isStatic :false,
            restitution :0,
            friction:1,
            density :1.2
        }
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width=40;
        this.height = 40;
        this.image = loadImage("plucking_mangoes/stone.png");
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.position.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}