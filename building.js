/*
====================================
BUILDING
====================================
*/

import { Door } from "./door.js";

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

    }

    draw(ctx, cameraX, cameraY) {

        // Building
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

        // Roof Highlight
        ctx.fillStyle = "rgba(255,255,255,0.08)";

        ctx.fillRect(

            this.x - cameraX,
            this.y - cameraY,

            this.width,
            12

        );

        // Door
        this.door.draw(
            ctx,
            cameraX,
            cameraY
        );

    }

}
