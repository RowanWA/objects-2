let disk;

function setup() {
  createCanvas(innerWidth, innerHeight);
  disk = {x:width/2, y:height/2, d:40, vx:2, vy: 2}
}

function draw() {
  background(220);
  //logic
  disk.x += disk.vx;
  disk.y += disk.yx;
  let r = disk.d/2;
  if (disk.x <= 0 + r || disk.x >= width - r) {
    disk.vx = -(disk.vx);
  }
  if (disk.y <= 0 + r || disk.y >= height - r) {
    disk.vy = -(disk.vy);
  }
  
  //draw
  circle(disk.x, disk.y, disk.d)
}
