/*
====================================
RENDERER
====================================
*/

import { Lighting } from "./lighting.js";

export class Renderer {

    constructor(ctx, canvas) {

        this.ctx = ctx;
        this.canvas = canvas;

        this.lighting = new Lighting();

    }

    render(world, player, camera) {

        const ctx = this.ctx;

        ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        world.draw(

            ctx,

            camera.x,
            camera.y,

            this.canvas.width,
            this.canvas.height,

            player

        );

        player.draw(

            ctx,

            this.canvas.width,
            this.canvas.height

        );

        this.lighting.draw(

            ctx,

            this.canvas,

            player

        );

    }

}
