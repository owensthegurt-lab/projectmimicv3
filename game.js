/*
====================================
PROJECT MIMIC
====================================
*/

import { World } from "./world.js";
import { Player } from "./player.js";
import { Flashlight } from "./flashlight.js";

class Game {

    constructor() {

        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");

        this.resize();

        window.addEventListener("resize", () => this.resize());

        // Keyboard
        this.keys = {};

        window.addEventListener("keydown", (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });

        window.addEventListener("keyup", (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });

        // Game Objects
        this.world = new World();
        this.player = new Player();
        this.flashlight = new Flashlight();

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

        const cameraX =
            this.player.worldX - this.canvas.width / 2;

        const cameraY =
            this.player.worldY - this.canvas.height / 2;

        // Draw World
        this.world.draw(
            this.ctx,
            cameraX,
            cameraY,
            this.canvas.width,
            this.canvas.height
        );

        // Draw Player
        this.player.draw(
            this.ctx,
            this.canvas.width,
            this.canvas.height
        );

        // Flashlight
        this.flashlight.draw(
            this.ctx,
            this.canvas.width,
            this.canvas.height
        );

    }

}

new Game();
