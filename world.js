/*
====================================
WORLD
====================================
*/

export class World {

    constructor() {

        this.tileSize = 64;

        this.width = 5000;
        this.height = 5000;

        this.buildings = [

            // Player House
            {
                x: 1400,
                y: 1400,
                width: 220,
                height: 180,
                color: "#8B5A2B"
            },

            // Shop
            {
                x: 1000,
                y: 900,
                width: 200,
                height: 200,
                color: "#666666"
            },

            // Police Station
            {
                x: 2200,
                y: 1200,
                width: 220,
                height: 180,
                color: "#777777"
            },

            // Hospital
            {
                x: 1800,
                y: 2200,
                width: 240,
                height: 200,
                color: "#888888"
            }

        ];

    }

    draw(ctx, cameraX, cameraY, screenWidth, screenHeight) {

        // Grass
        ctx.fillStyle = "#355E3B";
        ctx.fillRect(0, 0, screenWidth, screenHeight);

        // Roads
        ctx.fillStyle = "#4A4A4A";

        // Horizontal Road
        ctx.fillRect(
            -cameraX,
            1500 - cameraY,
            this.width,
            120
        );

        // Vertical Road
        ctx.fillRect(
            1500 - cameraX,
            -cameraY,
            120,
            this.height
        );

        // Trees
        ctx.fillStyle = "#1F6B2E";

        for (let i = 0; i < 80; i++) {

            const x = (i * 170) % this.width;
            const y = ((i * 320) % this.height);

            ctx.beginPath();
            ctx.arc(
                x - cameraX,
                y - cameraY,
                24,
                0,
                Math.PI * 2
            );
            ctx.fill();

        }

        // Buildings
        for (const building of this.buildings) {

            ctx.fillStyle = building.color;

            ctx.fillRect(
                building.x - cameraX,
                building.y - cameraY,
                building.width,
                building.height
            );

            ctx.strokeStyle = "#222";
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
