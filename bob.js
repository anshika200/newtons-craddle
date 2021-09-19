class Bob {
    constructor (x,y){
        var options ={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
          this.body = Bodies.circle(x, y, 10, options);
          this.radius = 100;
          World.add(world, this.body);
          this.image = loadImage("bobImg.png");
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }