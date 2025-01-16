class Tri {
    x1;
    y1;
    x2;
    y2;
    x3;
    y3;
    vx;
    vy;
    c;
    rotation;
    constructor(x1, y1, x2, y2, x3, y3, vx, vy, c) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        rectMode(CENTER)
        this.rotation = 0;
        this.c = color(random(255), random(255), random(255));
    }
    update() {
        this.x1 += this.vx;
        this.y1 += this.vy;
        this.x2 += this.vx;
        this.y2 += this.vy;
        this.x3 += this.vx;
        this.y3 += this.vy;
        let r = this.d / 2;
        if (this.x1 <= 0 + 15  || this.x1 >= width + 15  || this.x2 <= 0 + 15 || this.x2 >= width + 15 || this.x3 <= 0 + 15 || this.x3 >= width + 15) {
            this.vx = -this.vx;
            if (this.vx < 0 && this.vx > -15) {
                this.vx = this.vx - 0.5;

                print(this.vx)
                print(this.vy)
            } else if (this.vx < 15) {
                this.vx = this.vx + 0.5;

                print(this.vx)
                print(this.vy)
            }
            this.c = color(random(255), random(255), random(255));
        }
        if (this.y1 <= 0 - 15 || this.y1 >= height - 15 || this.y2 <= 0 - 15 || this.y2 >= height - 15 || this.y3 <= 0 - 15 || this.y3 >= height - 15) {
            this.vy = -this.vy;
            if (this.vy < 0 && this.vy > -15) {
                this.vy = this.vy - 0.5;

                print(this.vx)
                print(this.vy)
            } else if (this.vy < 15) {
                this.vy = this.vy + 0.5;

                print(this.vx)
                print(this.vy)
            }
            this.c = color(random(255), random(255), random(255));
        }
        this.rotation += 5;
    }
    draw() {
        fill(this.c)
        stroke(this.c)
        // triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3,)
        push()
        translate(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
        rotate(this.rotation)
        triangle(-15, 15, 0, -15, 15, 15)
        pop()
    }
}