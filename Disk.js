class Disk {
    x;
    y;
    d;
    vx;
    vy;
    c;
    constructor(x, y, d, vx, vy, c) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.c = color(random(255), random(255), random(255));
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        let r = this.d / 2;
        if (this.x <= 0 + r || this.x >= width - r) {
            this.vx = -this.vx;
            if (this.vx < 0 && this.vx > -20) {
                this.vx = this.vx - 0.5;

                print(this.vx)
                print(this.vy)
            } else if (this.vx < 20) {
                this.vx = this.vx + 0.5;

                print(this.vx)
                print(this.vy)
            }
            this.c = color(random(255), random(255), random(255));
        }
        if (this.y <= 0 + r || this.y >= height - r) {
            this.vy = -this.vy;
            if (this.vy < 0 && this.vy > -20) {
                this.vy = this.vy - 0.5;

                print(this.vx)
                print(this.vy)
            } else if (this.vy < 20) {
                this.vy = this.vy + 0.5;

                print(this.vx)
                print(this.vy)
            }
            this.c = color(random(255), random(255), random(255));
        }
    }
    draw() {
        fill(this.c)
        stroke(this.c)
        circle(this.x, this.y, this.d)
    }
}