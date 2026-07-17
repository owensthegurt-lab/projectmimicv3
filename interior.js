/*
====================================
INTERIOR
====================================
*/

export class Interior {

    constructor(width, height) {

        this.width = width;
        this.height = height;

        this.walls = [];
        this.furniture = [];

        // Outer walls

        this.addWall(0, 0, width, 12);
        this.addWall(0, height - 12, width, 12);

        this.addWall(0, 0, 12, height);
        this.addWall(width - 12, 0, 12, height);

    }

    addWall(x, y, width, height) {

        this.walls.push({

            x,
            y,
            width,
            height

        });

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

        ctx.fillStyle = "#8A7A63";

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

        // Walls

        ctx.fillStyle = "#5D4A37";

        for (const wall of this.walls) {

            ctx.fillRect(

                originX + wall.x - cameraX,
                originY + wall.y - cameraY,

                wall.width,
                wall.height

            );

        }

    }

}
