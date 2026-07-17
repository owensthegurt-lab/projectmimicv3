/*
====================================
WORLD
====================================
*/

export class World {

    constructor() {

        this.width = 5000;
        this.height = 5000;

        this.roads = [

            {
                x: 0,
                y: 1450,
                width: 5000,
                height: 120
            },

            {
                x: 1450,
                y: 0,
                width: 120,
                height: 5000
            }

        ];

        this.buildings = [

            {
                name: "Player House",
                x: 1200,
                y: 1200,
                width: 220,
                height: 180,
                color: "#7A5230"
            },

            {
                name: "Store",
                x: 1800,
                y: 1100,
                width: 200,
                height: 200,
                color: "#666666"
            },

            {
                name: "Police",
                x: 2100,
                y: 1700,
                width: 220,
                height: 180,
                color: "#5A5A5A"
            },

            {
                name: "Hospital",
                x: 900,
                y: 1900,
                width: 240,
                height: 200,
                color: "#808080"
            }

        ];

        this.trees = [];

        for (let i = 0; i < 120; i++) {

            this.trees.push({

                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: 20 + Math.random() * 10

            });

        }

    }

    draw(ctx, cameraX, cameraY, screenWidth, screenHeight) {

        // Grass
        ctx.fillStyle = "#315C35";
        ctx.fillRect(0, 0, screenWidth, screenHeight);

        // Roads
        ctx.fillStyle = "#474747";

        for (const road of this.roads) {

            ctx.fillRect(

                road.x - cameraX,
                road.y - cameraY,

                road.width,
                road.height

            );

        }

        // Trees
        for (const tree of this.trees) {

            ctx.fillStyle = "#1D5E20";

            ctx.beginPath();

            ctx.arc(

                tree.x - cameraX,
                tree.y - cameraY,

                tree.radius,

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
