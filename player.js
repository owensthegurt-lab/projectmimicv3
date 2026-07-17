/*
====================================
PLAYER
====================================
*/

export class Player {

    constructor() {

        // Spawn away from buildings
        this.worldX = 1000;
        this.worldY = 1000;

        this.radius = 15;
        this.speed = 300;

    }

    update(delta, keys) {

        // WASD Movement
        if (keys["w"]) {
            this.worldY -= this.speed * delta;
        }

        if (keys["s"]) {
            this.worldY += this.speed * delta;
        }

        if (keys["a"]) {
            this.worldX -= this.speed * delta;
        }

        if (keys["d"]) {
            this.worldX += this.speed * delta;
        }

    }

    draw(ctx, width, height) {

        const x = width / 2;
        const y = height / 2;

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.beginPath();
        ctx.ellipse(x, y + 10, 14, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Player
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI * 2);
        ctx.fill();

    }

}
