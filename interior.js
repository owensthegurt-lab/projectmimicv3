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


    /*
    ====================================
    LOOT READY
    ====================================

    Future loot system will use this.

    Example:

    {
        x:100,
        y:80,
        type:"battery"
    }

    */

    this.loot = [];



    /*
    ====================================
    OUTER WALLS
    ====================================
    */


    this.addWall(

        0,
        0,

        width,
        12

    );


    this.addWall(

        0,
        height - 12,

        width,
        12

    );


    this.addWall(

        0,
        0,

        12,
        height

    );


    this.addWall(

        width - 12,
        0,

        12,
        height

    );


}





/*
====================================
WALLS
====================================
*/

addWall(x, y, width, height) {


    this.walls.push({

        x,

        y,

        width,

        height

    });


}





/*
====================================
LOOT
====================================
*/

addLoot(x, y, type) {


    this.loot.push({

        x,

        y,

        type

    });


}





/*
====================================
DRAW
====================================
*/

draw(ctx, cameraX, cameraY, originX, originY) {



    /*
    FLOOR
    */


    ctx.fillStyle = "#8A7A63";


    ctx.fillRect(

        originX - cameraX,

        originY - cameraY,

        this.width,

        this.height

    );



    /*
    LOOT

    Hidden for now.
    We will add proper loot
    rendering later.

    */



    /*
    WALLS
    */


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
