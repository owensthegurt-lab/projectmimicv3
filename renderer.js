/*
====================================
RENDERER
====================================
*/

import { Flashlight } from "./flashlight.js";

export class Renderer {

    constructor(ctx, canvas) {

        this.ctx = ctx;
        this.canvas = canvas;

        this.flashlight = new Flashlight();

    }

    render(world, player, camera) {

        const ctx = this.ctx;

        // Clear Screen
        ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // Background
        ctx.fillStyle = "#151515";
        ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // World
        world.draw(
            ctx,
            camera.x,
            camera.y,
            this.canvas.width,
            this.canvas.height
        );

        // Player
        player.draw(
            ctx,
            this.canvas.width,
            this.canvas.height
        );

        // Flashlight (draw last)
        this.flashlight.draw(
            ctx,
            this.canvas,
            player
        );

    }

}
