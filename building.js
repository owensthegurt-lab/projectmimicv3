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

        // Door

        this.door = new Door(
            this.x + this.width / 2 - 12,
            this.y + this.height - 30
        );

        // Interior

        this.interior = new Interior(
            this.width,
            this.height
        );

        /*
        ====================================
        ROOM LAYOUT
        ====================================
        */

        // Vertical Divider

        this.interior.addWall(

            210,
            0,

            12,
            180

        );

        // Horizontal Divider

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

        // Couch

        this.interior.addFurniture(

            40,
            40,

            90,
            35,

            "#5B3A29"

        );

        // Coffee Table

        this.interior.addFurniture(

            70,
            95,

            50,
            35,

            "#7B5A3B"

        );

        // TV

        this.interior.addFurniture(

            155,
            35,

            20,
            80,

            "#2B2B2B"

        );

        // Dining Table

        this.interior.addFurniture(

            270,
            40,

            80,
            55,

            "#8B6A45"

        );

        // Kitchen Counter

        this.interior.addFurniture(

            240,
            130,

            120,
            35,

            "#666666"

        );

        // Bed

        this.interior.addFurniture(

            40,
            240,

            120,
            70,

            "#3F4A5A"

        );

        // Wardrobe

        this.interior.addFurniture(

            180,
            235,

            30,
            80,

            "#4E342E"

        );

        // Desk

        this.interior.addFurniture(

            270,
            240,

            90,
            45,

            "#795548"

        );

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
