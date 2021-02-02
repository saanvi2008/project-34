class hero{
    constructor(x,y,r){

        this.x = x;
        this.y = y;
        this.r = r;

        var options = {
            density : 1,
            friction : 1
        }

        this.image = loadImage("Superhero-01.png");

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();

    }
}