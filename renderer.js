/*
====================================
RENDERER
====================================
*/

export class Renderer {

    constructor(ctx, canvas) {

        this.ctx = ctx;
        this.canvas = canvas;

    }

    render(world, player, camera, flashlight) {

        const ctx = this.ctx;

        // Clear Screen
        ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        // Draw World
        world.draw(
            ctx,
            camera.x,
            camera.y,
            this.canvas.width,
            this.canvas.height
        );

        // Draw Player
        player.draw(
            ctx,
            this.canvas.width,
            this.canvas.height
        );

        // Draw Flashlight
        flashlight.draw(
            ctx,
            this.canvas.width,
            this.canvas.height
        );

    }

}
