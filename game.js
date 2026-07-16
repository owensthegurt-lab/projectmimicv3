/*
========================================
PROJECT MIMIC
========================================
*/

class Game {

    constructor() {

        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");

        this.resize();

        window.addEventListener("resize", () => this.resize());

        this.running = true;

        this.lastTime = performance.now();

        requestAnimationFrame((time) => this.loop(time));

    }

    resize() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

    }

    loop(time) {

        const delta = (time - this.lastTime) / 1000;

        this.lastTime = time;

        this.update(delta);

        this.render();

        requestAnimationFrame((t) => this.loop(t));

    }

    update(delta) {

    }

    render() {

        this.ctx.fillStyle = "#050505";
        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        this.ctx.fillStyle = "white";

        this.ctx.font = "26px Arial";

        this.ctx.fillText(
            "PROJECT MIMIC",
            40,
            60
        );

    }

}

new Game();
