/*
====================================
RENDERER
====================================
*/

import { Lighting } from "./lighting.js";
import { UI } from "./ui.js";

export class Renderer {

    constructor(ctx, canvas) {

        this.ctx = ctx;
        this.canvas = canvas;

        this.lighting = new Lighting();
        this.ui = new UI();

    }

    render(world, player, camera, mimicManager) {

        const ctx = this.ctx;

        /*
        ====================================
        CLEAR
        ====================================
        */

        ctx.clearRect(

            0,
            0,

            this.canvas.width,
            this.canvas.height

        );

        /*
        ====================================
        WORLD
        ====================================
        */

        world.draw(

            ctx,

            camera.x,
            camera.y,

            this.canvas.width,
            this.canvas.height,

            player

        );

        /*
        ====================================
        MIMIC
        ====================================
        */

        mimicManager.draw(

            ctx,

            camera

        );

        /*
        ====================================
        PLAYER
        ====================================
        */

        player.draw(

            ctx,

            this.canvas.width,
            this.canvas.height

        );

        /*
        ====================================
        LIGHTING
        ====================================
        */

        this.lighting.draw(

            ctx,

            this.canvas,

            player

        );

        /*
        ====================================
        UI
        ====================================
        */

        this.ui.draw(

            ctx,

            this.canvas,

            player,

            world

        );

    }

}
