/*
====================================
PLAYER
====================================
*/

export class Player {

    constructor() {

        // Spawn Position
        this.worldX = 1000;
        this.worldY = 1000;

        // Movement
        this.speed = 300;

        // Appearance
        this.radius = 15;

    }

    update(delta, input) {

        if (input.down("w")) {
            this.worldY -= this.speed * delta;
        }

        if (input.down("s")) {
            this.worldY += this.speed * delta;
        }

        if (input.down("a")) {
            this.worldX -= this.speed * delta;
        }

        if (input.down("d")) {
            this.worldX += this.speed * delta;
        }

    }

    draw(ctx, width, height) {

        const screenX = width / 2;
        const screenY = height / 2;

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.beginPath();
        ctx.ellipse(
            screenX,
            screenY + 10,
            14,
            6,
            0,
            0,
            Math.PI * 2
        );
        ctx.fill();

        // Body
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(
            screenX,
            screenY,
            this.radius,
            0,
            Math.PI * 2
        );
        ctx.fill();

    }

}
