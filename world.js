/*
====================================
WORLD
====================================
*/

import { Building } from "./building.js";

export class World {

    constructor() {

        this.width = 5000;
        this.height = 5000;

        // Roads
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

        // Buildings
        this.buildings = [

            new Building(
                "Player House",
                1200,
                1200,
                420,
                340,
                "#7A5230"
            ),

            new Building(
                "Store",
                1800,
                1100,
                340,
                340,
                "#666666"
            ),

            new Building(
                "Police Station",
                2100,
                1700,
                400,
                320,
                "#5A5A5A"
            ),

            new Building(
                "Hospital",
                900,
                1900,
                450,
                380,
                "#808080"
            )

        ];

        // Trees
        this.trees = [];

        for (let i = 0; i < 120; i++) {

            this.trees.push({

                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: 20 + Math.random() * 10

            });

        }

    }

    draw(ctx, cameraX, cameraY, screenWidth, screenHeight, player) {

        // Grass
        ctx.fillStyle = "#315C35";
        ctx.fillRect(
            0,
            0,
            screenWidth,
            screenHeight
        );

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

            building.draw(

                ctx,

                cameraX,
                cameraY,

                player

            );

        }

    }

}
