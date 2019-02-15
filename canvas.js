const canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight
console.log("fuck")

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight


})


function Star(x, y, dx, dy, dr) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.dr = dr;
    this.color = "white"
    // this.color = "#" + ((1 << 23) * Math.random() | 0).toString(10)

    this.draw = function () {

        c.beginPath();
        c.arc(this.x, this.y, this.dr, 0, Math.PI * 2, false);

        c.strokeStyle = "blue";
        c.fillStyle = "white";


        c.fill()


    }
    this.update = function () {
        if (this.x + this.dr > innerWidth || this.x - this.dr < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.dr > innerHeight || this.y - this.dr < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity

        this.draw();
    }

}
let star = new Star(200, 200, 3, 3, 30);
let starArray = [];
// console.log(starArray)
for (let i = 0; i < 20; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 2; // velocity
    let dy = (Math.random() - 0.5) * 2;
    let dr = Math.random() * 9 + 1; //circle radius
    starArray.push(new Star(x, y, dx, dy, dr))


}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < starArray.length; i++) {
        starArray[i].update();
        console.log(starArray)
    }
}


animate()