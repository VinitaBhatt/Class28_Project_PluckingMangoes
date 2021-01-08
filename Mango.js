class Mango{
    constructor(x,y){
        var options={
            isStatic :true,
            restitution :0,
            friction :1
        }

        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image = loadImage("plucking_mangoes/mango.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}