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

        /*
        ====================================
        ROADS
        ====================================
        */

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

        /*
        ====================================
        BUILDINGS
        ====================================
        */

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

        /*
        ====================================
        MIMIC PATROL POINTS
        ====================================
        */

        this.patrolPoints = [

            // Horizontal road

            { x: 500,  y: 1510 },
            { x: 900,  y: 1510 },
            { x: 1300, y: 1510 },
            { x: 1700, y: 1510 },
            { x: 2200, y: 1510 },
            { x: 2800, y: 1510 },
            { x: 3400, y: 1510 },
            { x: 4100, y: 1510 },
            { x: 4700, y: 1510 },

            // Vertical road

            { x: 1510, y: 400 },
            { x: 1510, y: 900 },
            { x: 1510, y: 1400 },
            { x: 1510, y: 2000 },
            { x: 1510, y: 2600 },
            { x: 1510, y: 3200 },
            { x: 1510, y: 3900 },
            { x: 1510, y: 4600 },

            // Around Player House

            { x: 1100, y: 1180 },
            { x: 1730, y: 1180 },
            { x: 1100, y: 1600 },
            { x: 1730, y: 1600 },

            // Around Store

            { x: 1700, y: 1050 },
            { x: 2200, y: 1050 },
            { x: 1700, y: 1470 },
            { x: 2200, y: 1470 },

            // Around Police Station

            { x: 2000, y: 1650 },
            { x: 2600, y: 1650 },
            { x: 2000, y: 2050 },
            { x: 2600, y: 2050 },

            // Around Hospital

            { x: 800,  y: 1850 },
            { x: 1450, y: 1850 },
            { x: 800,  y: 2320 },
            { x: 1450, y: 2320 }

        ];

        /*
        ====================================
        TREES
        ====================================
        */

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

        /*
        ====================================
        GRASS
        ====================================
        */

        ctx.fillStyle = "#315C35";

        ctx.fillRect(
            0,
            0,
            screenWidth,
            screenHeight
        );

        /*
        ====================================
        ROADS
        ====================================
        */

        ctx.fillStyle = "#474747";

        for (const road of this.roads) {

            ctx.fillRect(

                road.x - cameraX,
                road.y - cameraY,

                road.width,
                road.height

            );

        }

        /*
        ====================================
        TREES
        ====================================
        */

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

        /*
        ====================================
        BUILDINGS
        ====================================
        */

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
