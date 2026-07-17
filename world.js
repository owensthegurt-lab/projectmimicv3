/*
====================================
WORLD
====================================
*/

export class World {

    constructor() {

        this.tileSize = 64;

        this.width = 100;
        this.height = 100;

        this.buildings = [

            {
                x: 1500,
                y: 1450,
                width: 220,
                height: 180,
                color: "#8b5a2b"
            },

            {
                x: 900,
                y: 1100,
                width: 180,
                height: 220,
                color: "#555555"
            },

            {
                x: 2300,
                y: 1300,
                width: 220,
                height: 160,
                color: "#666666"
            },

            {
                x: 1800,
                y: 2200,
                width: 200,
                height: 200,
                color: "#777777"
            }

        ];

    }

    draw(ctx, cameraX, cameraY, canvasWidth, canvasHeight) {

        // Grass
        ctx.fillStyle = "#355e3b";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Roads
        ctx.fillStyle = "#444444";

        ctx.fillRect(
            -cameraX,
            1550 - cameraY,
            this.width * this.tileSize,
            120
        );

        ctx.fillRect(
            1600 - cameraX,
            -cameraY,
            120,
            this.height * this.tileSize
        );

        // Buildings
        for (const building of this.buildings) {

            ctx.fillStyle = building.color;

            ctx.fillRect(
                building.x - cameraX,
                building.y - cameraY,
                building.width,
                building.height
            );

            ctx.strokeStyle = "#222222";
            ctx.lineWidth = 4;

            ctx.strokeRect(
                building.x - cameraX,
                building.y - cameraY,
                building.width,
                building.height
            );

        }

    }

}
