/*
====================================
PROJECT MIMIC
====================================
*/

class Player {

    constructor() {

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        this.radius = 15;

        this.speed = 300;

    }

    update(delta, keys) {

        if (keys["w"]) this.y -= this.speed * delta;
        if (keys["s"]) this.y += this.speed * delta;
        if (keys["a"]) this.x -= this.speed * delta;
        if (keys["d"]) this.x += this.speed * delta;

    }

    draw(ctx) {

        ctx.fillStyle = "white";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

    }

}

class Game {

    constructor() {

        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");

        this.keys = {};

        this.resize();

        window.addEventListener("resize", () => this.resize());

        window.addEventListener("keydown", (e) => {

            this.keys[e.key.toLowerCase()] = true;

        });

        window.addEventListener("keyup", (e) => {

            this.keys[e.key.toLowerCase()] = false;

        });

        this.player = new Player();

        this.lastTime = performance.now();

        requestAnimationFrame(this.loop.bind(this));

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

        requestAnimationFrame(this.loop.bind(this));

    }

    update(delta) {

        this.player.update(delta, this.keys);

    }

    render() {

        this.ctx.fillStyle = "#050505";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.player.draw(this.ctx);

    }

}

new Game();
