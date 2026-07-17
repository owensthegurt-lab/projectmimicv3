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

        this.door = new Door(
            this.x + this.width / 2 - 12,
            this.y + this.height - 30
        );

        this.interior = new Interior(
            this.width,
            this.height
        );

        this.interior.addFurniture(
            30,
            30,
            60,
            40,
            "#5B3A29"
        );

        this.interior.addFurniture(
            120,
            80,
            40,
            80,
            "#3F4A5A"
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

        // Interior always exists
        this.interior.draw(
            ctx,
            cameraX,
            cameraY,
            this.x,
            this.y
        );

        // Hide roof if player is inside
        if (this.playerInside(player)) {

            this.door.draw(
                ctx,
                cameraX,
                cameraY
            );

            return;

        }

        // Roof
        ctx.fillStyle = this.color;

        ctx.fillRect(

            this.x - cameraX,
            this.y - cameraY,

            this.width,
            this.height

        );

        // Outline
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 4;

        ctx.strokeRect(

            this.x - cameraX,
            this.y - cameraY,

            this.width,
            this.height

        );

        // Highlight
        ctx.fillStyle = "rgba(255,255,255,.08)";

        ctx.fillRect(

            this.x - cameraX,
            this.y - cameraY,

            this.width,
            12

        );

        this.door.draw(
            ctx,
            cameraX,
            cameraY
        );

    }

}
