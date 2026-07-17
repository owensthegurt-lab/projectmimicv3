/*
====================================
PLAYER
====================================
*/

class Player {

    constructor() {

        this.worldX = 1600;
        this.worldY = 1600;

        this.radius = 15;
        this.speed = 300;

    }

    update(delta, keys, world) {

        const oldX = this.worldX;
        const oldY = this.worldY;

        // Horizontal Movement
        if (keys["a"]) this.worldX -= this.speed * delta;
        if (keys["d"]) this.worldX += this.speed * delta;

        if (CollisionSystem.checkPlayer(this, world)) {
            this.worldX = oldX;
        }

        // Vertical Movement
        if (keys["w"]) this.worldY -= this.speed * delta;
        if (keys["s"]) this.worldY += this.speed * delta;

        if (CollisionSystem.checkPlayer(this, world)) {
            this.worldY = oldY;
        }

    }

    draw(ctx, canvasWidth, canvasHeight) {

        const x = canvasWidth / 2;
        const y = canvasHeight / 2;

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,0.35)";

        ctx.beginPath();

        ctx.ellipse(
            x,
            y + 12,
            14,
            6,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        // Player
        ctx.fillStyle = "white";

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}
