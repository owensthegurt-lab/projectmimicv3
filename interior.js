/*
====================================
INTERIOR
====================================
*/

export class Interior {

    constructor(width, height) {

        this.width = width;
        this.height = height;

        this.furniture = [];

    }

    addFurniture(x, y, width, height, color) {

        this.furniture.push({

            x,
            y,
            width,
            height,
            color

        });

    }

    draw(ctx, cameraX, cameraY, originX, originY) {

        // Floor
        ctx.fillStyle = "#8B7B63";

        ctx.fillRect(

            originX - cameraX,
            originY - cameraY,

            this.width,
            this.height

        );

        // Furniture
        for (const item of this.furniture) {

            ctx.fillStyle = item.color;

            ctx.fillRect(

                originX + item.x - cameraX,
                originY + item.y - cameraY,

                item.width,
                item.height

            );

        }

    }

}
