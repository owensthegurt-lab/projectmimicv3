/*
====================================
WORLD
====================================
*/

class World {

    constructor() {

        this.tileSize = 64;

        this.width = 50;
        this.height = 50;

    }

    draw(ctx, cameraX, cameraY, canvasWidth, canvasHeight) {

        // Background
        ctx.fillStyle = "#1a1a1a";
        ctx.fillRect(
            0,
            0,
            canvasWidth,
            canvasHeight
        );

        // Grid
        ctx.strokeStyle = "#2d2d2d";
        ctx.lineWidth = 1;

        for (let x = 0; x <= this.width; x++) {

            ctx.beginPath();

            ctx.moveTo(
                x * this.tileSize - cameraX,
                -cameraY
            );

            ctx.lineTo(
                x * this.tileSize - cameraX,
                this.height * this.tileSize - cameraY
            );

            ctx.stroke();

        }

        for (let y = 0; y <= this.height; y++) {

            ctx.beginPath();

            ctx.moveTo(
                -cameraX,
                y * this.tileSize - cameraY
            );

            ctx.lineTo(
                this.width * this.tileSize - cameraX,
                y * this.tileSize - cameraY
            );

            ctx.stroke();

        }

    }

}
