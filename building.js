/*
====================================
BUILDING
====================================
*/

export class Building {

    constructor(name, x, y, width, height, color) {

        this.name = name;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.color = color;

        // Future systems

        this.hasDoor = true;
        this.isOpen = false;
        this.enterable = true;

    }

    draw(ctx, cameraX, cameraY) {

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

        // Door

        if (this.hasDoor) {

            ctx.fillStyle = this.isOpen
                ? "#5E3A1A"
                : "#3A2412";

            ctx.fillRect(

                this.x - cameraX + this.width / 2 - 12,
                this.y - cameraY + this.height - 30,

                24,
                30

            );

        }

    }

}
