/*
====================================
PROJECT MIMIC
====================================
*/

import { Input } from "./input.js";
import { Mouse } from "./mouse.js";

import { Camera } from "./camera.js";
import { Renderer } from "./renderer.js";

import { Player } from "./player.js";
import { World } from "./world.js";

import { Interaction } from "./interaction.js";

import { MimicManager } from "./mimicManager.js";

class Game {

    constructor() {

        /*
        ==========================
        CANVAS
        ==========================
        */

        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");

        this.resize();

        window.addEventListener(
            "resize",
            () => this.resize()
        );

        /*
        ==========================
        ENGINE
        ==========================
        */

        this.input = new Input();
        this.mouse = new Mouse(this.canvas);

        this.camera = new Camera();

        this.renderer = new Renderer(

            this.ctx,
            this.canvas

        );

        /*
        ==========================
        WORLD
        ==========================
        */

        this.world = new World();

        this.player = new Player();

        /*
        ==========================
        MIMIC
        ==========================
        */

        this.mimicManager = new MimicManager(
            this.world
        );

        /*
        ==========================
        GAME LOOP
        ==========================
        */

        this.lastTime = performance.now();

        requestAnimationFrame(
            this.loop.bind(this)
        );

    }

    resize() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

    }

    loop(time) {

        const delta =
            (time - this.lastTime) / 1000;

        this.lastTime = time;

        this.update(delta);
        this.render();

        requestAnimationFrame(
            this.loop.bind(this)
        );

    }

    update(delta) {

        /*
        ==========================
        PLAYER
        ==========================
        */

        this.player.update(

            delta,

            this.input,
            this.mouse,

            this.world

        );

        /*
        ==========================
        INTERACTION
        ==========================
        */

        Interaction.update(

            this.player,
            this.world,
            this.input

        );

        /*
        ==========================
        MIMIC
        ==========================
        */

        this.mimicManager.update(

            delta,

            this.player

        );

        /*
        ==========================
        CAMERA
        ==========================
        */

        this.camera.update(

            this.player,

            this.canvas,

            delta

        );

    }

    render() {

        this.renderer.render(

            this.world,

            this.player,

            this.camera,

            this.mimicManager

        );

    }

}

new Game();
