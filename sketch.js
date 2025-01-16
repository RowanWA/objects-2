let disk;
let mySquare;
let tri;

function setup() {
  createCanvas(innerWidth, innerHeight);
  disk = new Disk(width / 2, height / 2, 30)
  disk2 = new Disk(width / 2, height / 2, 30)
  disk3 = new Disk(width / 2, height / 2, 30)
  mySquare = new Square(width / 2, height / 2, 30)
  mySquare2 = new Square(width / 2, height / 2, 30)
  mySquare3 = new Square(width / 2, height / 2, 30)
  tri1 = new Tri((width / 2), (height / 2), 15 + (width / 2), (height / 2) - 30, 30 + (width / 2), (height / 2))
  tri2 = new Tri((width / 2), (height / 2), 15 + (width / 2), (height / 2) - 30, 30 + (width / 2), (height / 2))
  tri3 = new Tri((width / 2), (height / 2), 15 + (width / 2), (height / 2) - 30, 30 + (width / 2), (height / 2))
}

function draw() {
  background(0, 5);
  disk.update();
  disk.draw();
  disk2.update();
  disk2.draw();
  disk3.update();
  disk3.draw();
  mySquare.update();
  mySquare.draw();
  mySquare2.update();
  mySquare2.draw();
  mySquare3.update();
  mySquare3.draw();
  tri1.update();
  tri1.draw();
  tri2.update();
  tri2.draw();
  tri3.update();
  tri3.draw();

}
