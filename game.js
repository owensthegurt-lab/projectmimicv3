/*
====================================
PROJECT MIMIC
====================================
*/

import { Input } from "./input.js";
import { Camera } from "./camera.js";
import { Renderer } from "./renderer.js";

import { Player } from "./player.js";
import { World } from "./world.js";
import { Flashlight } from "./flashlight.js";

class Game {

    constructor() {

        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");

        this.resize();

        window.addEventListener("resize", () => this.resize());

        // Engine
        this.input = new Input();
        this.camera = new Camera();
        this.renderer = new Renderer(this.ctx, this.canvas);

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

        this.player.update(
            delta,
            this.input
        );

        this.camera.update(
            this.player,
            this.canvas
        );

    }

    render() {

        this.renderer.render(
            this.world,
            this.player,
            this.camera,
            this.flashlight
        );

    }

}

new Game();
