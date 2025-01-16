let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  // disk = {x:width/2, y:height/2, d:40, vx:2.5, vy: 1.5}
  disk = {x:width/2, y:height/2, d:40, vx:0, vy: 0}
  disk.update = function(){
    this.x += this.vx;
  this.y += this.vy;
  let r = this.d/2;
  if (this.x <= 0 + r || this.x >= width - r) {
    this.vx = -this.vx;
    if (this.vx <0){
      this.vx = this.vx - 1;
    } else {
      this.vx = this.vx + 1;
    }
  }
  if (this.y <= 0 + r || this.y >= height - r) {
    this.vy = -this.vy;
    if (this.vy <0){
      this.vy = this.vy - 1;
    } else {
      this.vy = this.vy + 1;
    }
  }
  }
  disk.draw = function(){
    circle(this.x, this.y, this.d)
  }
}

function draw() {
  background(220);

  disk.update()
  disk.draw()
  
  //draw
  
}
