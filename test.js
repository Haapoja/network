const canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
console.log("fuck")

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})


function Star(x, y, xv, yv, radius, color) {
    this.x = x
    this.y = y
    this.xv = xv
    this.yv = yv
    this.radius = radius
    this.color = color



}
Star.prototype.draw = function () {

    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)

    c.fill()
    c.closePath()

}

Star.prototype.update = function () {

    //reverse velocity
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
        this.xv = -this.xv
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.yv = -this.yv
    }
    this.x += this.xv
    this.y += this.yv
    this.draw()
    //if hits side of screen
    // if (this.x + this.radius + this.vel.x > canvas.width || this.x - this.radius <= 0) {
    //     this.vel.x = -this.vel.x
    //     this.shatter()
    // }

}

function init() {
    let star = new Star(200, 200, 3, 3, 10, "#E3EAEF")
    stars = []

    for (let i = 0; i < 100; i++) {
        stars.push(new Star(canvas.width / 2, 30, 15, "#E3EAEF"))
    }

}

function animate() {
    requestAnimationFrame(animate);


    stars.forEach(star => {
        star.update();

    });
}

init()
animate()