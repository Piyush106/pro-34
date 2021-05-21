class Ball {
  constructor(x, y, width, height, angle) {
    var options = { 
      density: 1, 
      frictionAir: 0.005};

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("hero.png");
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    fill("green");
   image(this.image,0,0, this.width+300, this.height+80);
    pop();
  }
}
