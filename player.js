/*
====================================
PLAYER
====================================
*/

import { CollisionSystem } from "./collision.js";

export class Player {

    constructor() {

        this.worldX = 1000;
        this.worldY = 1000;

        this.speed = 300;
        this.radius = 15;

        // Mouse Facing
        this.angle = 0;

    }

    update(delta, input, mouse, world) {

        const oldX = this.worldX;
        const oldY = this.worldY;

        // Movement

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

        // Collision

        if (CollisionSystem.playerCollision(this, world)) {

            this.worldX = oldX;
            this.worldY = oldY;

        }

        // Face Mouse

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        this.angle = Math.atan2(

            mouse.y - centerY,
            mouse.x - centerX

        );

    }

    draw(ctx, width, height) {

        const x = width / 2;
        const y = height / 2;

        // Shadow

        ctx.fillStyle = "rgba(0,0,0,.35)";
        ctx.beginPath();
        ctx.ellipse(x, y + 14, 12, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();

        ctx.translate(x, y);
        ctx.rotate(this.angle);

        // Legs

        ctx.fillStyle = "#1f1f1f";

        ctx.fillRect(-8, 10, 5, 10);
        ctx.fillRect(3, 10, 5, 10);

        // Body

        ctx.fillStyle = "#2c7be5";

        ctx.fillRect(-10, -8, 20, 22);

        // Head

        ctx.fillStyle = "#f2d2b6";

        ctx.beginPath();
        ctx.arc(0, -16, 8, 0, Math.PI * 2);
        ctx.fill();

        // Flashlight

        ctx.strokeStyle = "#bdbdbd";
        ctx.lineWidth = 4;

        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(22, 0);
        ctx.stroke();

        ctx.restore();

    }

}
