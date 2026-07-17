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

        this.x + this.width / 2 - 25,

        this.y + this.height - 45,

        50,

        45

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


    // Vertical wall

    this.interior.addWall(

        210,
        0,

        12,
        180

    );


    // Horizontal wall

    this.interior.addWall(

        0,
        180,

        180,
        12

    );



    /*
    ====================================
    LOOT SPACE
    ====================================
    */

    // Loot will be added here later

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



    /*
    ====================================
    INTERIOR
    ====================================
    */


    this.interior.draw(

        ctx,

        cameraX,

        cameraY,

        this.x,

        this.y

    );




    /*
    ====================================
    ROOF
    ====================================
    */


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



        ctx.fillStyle =
            "rgba(255,255,255,.08)";



        ctx.fillRect(

            this.x - cameraX,

            this.y - cameraY,

            this.width,

            12

        );


    }



    /*
    ====================================
    DOOR
    ====================================
    */


    this.door.draw(

        ctx,

        cameraX,

        cameraY

    );


}



}
