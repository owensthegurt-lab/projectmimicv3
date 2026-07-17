/*
====================================
BUILDING
====================================
*/

import { Door } from "./door.js";
import { Interior } from "./interior.js";

export class Building {

    constructor(name, x, y, width, height, color) {

        this.name = name;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.color = color;

        this.enterable = true;

        /*
        ====================================
        DOOR
        ====================================
        */

        this.door = new Door(

            this.x + this.width / 2 - 12,
            this.y + this.height - 30

        );

        /*
        ====================================
        INTERIOR
        ====================================
        */

        this.interior = new Interior(

            this.width,
            this.height

        );

        /*
        ====================================
        ROOM LAYOUT
        ====================================
        */

        // Vertical Wall

        this.interior.addWall(

            210,
            0,

            12,
            180

        );

        // Horizontal Wall

        this.interior.addWall(

            0,
            180,

            180,
            12

        );

        /*
        ====================================
        FURNITURE
        ====================================
        */

        // Living Room

        this.interior.addFurniture(

            35,
            35,

            95,
            35,

            "#5B3A29"

        );

        this.interior.addFurniture(

            55,
            95,

            55,
            35,

            "#7B5A3B"

        );

        this.interior.addFurniture(

            155,
            35,

            20,
            80,

            "#2B2B2B"

        );

        // Kitchen

        this.interior.addFurniture(

            270,
            40,

            90,
            55,

            "#8B6A45"

        );

        this.interior.addFurniture(

            250,
            130,

            120,
            35,

            "#666666"

        );

        // Bedroom

        this.interior.addFurniture(

            35,
            220,

            120,
            70,

            "#3F4A5A"

        );

        this.interior.addFurniture(

            170,
            215,

            30,
            90,

            "#4E342E"

        );

        // Office

        this.interior.addFurniture(

            285,
            220,

            75,
            45,

            "#795548"

        );

        /*
        ====================================
        ENTRY WALKWAY
        ====================================

        The area directly inside the front
        door is intentionally left EMPTY.

        This creates a hallway from the
        front door into the house so the
        player never gets trapped.

        */

    }

    playerInside(player) {

        return (

            player.worldX > this.x &&
            player.worldX < this.x + this.width &&

            player.worldY > this.y &&
            player.worldY < this.y + this.height

        );

    }

    draw(ctx, cameraX, cameraY, player) {

        // Interior

        this.interior.draw(

            ctx,

            cameraX,
            cameraY,

            this.x,
            this.y

        );

        // Roof

        if (!this.playerInside(player)) {

            ctx.fillStyle = this.color;

            ctx.fillRect(

                this.x - cameraX,
                this.y - cameraY,

                this.width,
                this.height

            );

            ctx.strokeStyle = "#222";
            ctx.lineWidth = 4;

            ctx.strokeRect(

                this.x - cameraX,
                this.y - cameraY,

                this.width,
                this.height

            );

            // Roof Highlight

            ctx.fillStyle = "rgba(255,255,255,.08)";

            ctx.fillRect(

                this.x - cameraX,
                this.y - cameraY,

                this.width,
                12

            );

        }

        // Door

        this.door.draw(

            ctx,

            cameraX,
            cameraY

        );

    }

}
