var player, ground;

function setup() {
  canvas = createCanvas(600,600);
  canvas.position((windowWidth / 2) - (canvas.width / 2),(windowHeight / 2) - (canvas.height / 2));

  ground = new Ground(30);
  player = new Player(ground.h);
}

function draw() {
  background(255);
  fill(255);
  rect(0,0,width-1,height-1);

  ground.show();
  player.show();
}

class Ground {
  constructor(h) {
    this.h = h
    this.y = height - this.h;
  }

  show() {
    fill(0);
    rect(0,this.y,width,this.h);
  }
}

class Player {
  constructor(h) {
    this.x = width / 2;
    this.y = height - h;
  }

  show() {
    fill(0);
    ellipse(this.x,this.y,20);
    rect(this.x - 2, this.y - 20, 3, 20)
  }
}
