/*
====================================
PROJECT MIMIC
====================================
*/

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

        this.world = new World();
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

        this.player.update(
            delta,
            this.keys,
            this.world
        );

    }

    render() {

        const cameraX =
            this.player.worldX -
            this.canvas.width / 2;

        const cameraY =
            this.player.worldY -
            this.canvas.height / 2;

        this.world.draw(
            this.ctx,
            cameraX,
            cameraY,
            this.canvas.width,
            this.canvas.height
        );

        this.player.draw(
            this.ctx,
            this.canvas.width,
            this.canvas.height
        );

    }

}

new Game();
