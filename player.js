/*
====================================
PLAYER
====================================
*/

export class Player {

    constructor() {

        // World Position
        this.worldX = 1000;
        this.worldY = 1000;

        // Movement
        this.speed = 300;

        // Direction
        this.direction = "down";

    }

    update(delta, input) {

        let moving = false;

        if (input.down("w")) {

            this.worldY -= this.speed * delta;
            this.direction = "up";
            moving = true;

        }

        if (input.down("s")) {

            this.worldY += this.speed * delta;
            this.direction = "down";
            moving = true;

        }

        if (input.down("a")) {

            this.worldX -= this.speed * delta;
            this.direction = "left";
            moving = true;

        }

        if (input.down("d")) {

            this.worldX += this.speed * delta;
            this.direction = "right";
            moving = true;

        }

    }

    draw(ctx, width, height) {

        const x = width / 2;
        const y = height / 2;

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,.35)";
        ctx.beginPath();
        ctx.ellipse(x, y + 14, 12, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Legs
        ctx.fillStyle = "#1f1f1f";

        ctx.fillRect(x - 8, y + 10, 5, 10);
        ctx.fillRect(x + 3, y + 10, 5, 10);

        // Body
        ctx.fillStyle = "#2c7be5";
        ctx.fillRect(x - 10, y - 8, 20, 22);

        // Head
        ctx.fillStyle = "#f0d4b0";
        ctx.beginPath();
        ctx.arc(x, y - 16, 8, 0, Math.PI * 2);
        ctx.fill();

        // Flashlight
        ctx.strokeStyle = "#999";
        ctx.lineWidth = 4;

        ctx.beginPath();

        switch (this.direction) {

            case "up":
                ctx.moveTo(x, y - 6);
                ctx.lineTo(x, y - 20);
                break;

            case "down":
                ctx.moveTo(x, y + 6);
                ctx.lineTo(x, y + 20);
                break;

            case "left":
                ctx.moveTo(x - 6, y);
                ctx.lineTo(x - 20, y);
                break;

            case "right":
                ctx.moveTo(x + 6, y);
                ctx.lineTo(x + 20, y);
                break;

        }

        ctx.stroke();

    }

}
