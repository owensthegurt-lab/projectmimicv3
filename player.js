/*
====================================
PLAYER
====================================
*/

import { CollisionSystem } from "./collision.js";


export class Player {


constructor() {


    /*
    ====================================
    POSITION
    ====================================
    */


    this.worldX = 1000;
    this.worldY = 1000;



    /*
    ====================================
    MOVEMENT
    ====================================
    */


    this.radius = 16;

    this.speed = 300;

    this.angle = 0;



    /*
    ====================================
    INVENTORY
    ====================================
    */


    this.inventory = [];



}



/*
====================================
UPDATE
====================================
*/

update(delta, input, mouse, world) {


    const oldX = this.worldX;

    const oldY = this.worldY;



    /*
    ====================================
    MOVEMENT
    ====================================
    */


    if(input.down("w")) {

        this.worldY -= this.speed * delta;

    }


    if(input.down("s")) {

        this.worldY += this.speed * delta;

    }


    if(input.down("a")) {

        this.worldX -= this.speed * delta;

    }


    if(input.down("d")) {

        this.worldX += this.speed * delta;

    }



    /*
    ====================================
    COLLISION
    ====================================
    */


    if(

        CollisionSystem.playerCollision(

            this,

            world

        )

    ) {


        this.worldX = oldX;

        this.worldY = oldY;


    }




    /*
    ====================================
    AIM
    ====================================
    */


    const cx =
        window.innerWidth / 2;


    const cy =
        window.innerHeight / 2;



    this.angle = Math.atan2(

        mouse.y - cy,

        mouse.x - cx

    );


}




/*
====================================
INVENTORY HELPERS
====================================
*/


addItem(type) {


    this.inventory.push(type);


}



hasItem(type) {


    return this.inventory.includes(type);


}



removeItem(type) {


    const index =
        this.inventory.indexOf(type);



    if(index !== -1) {


        this.inventory.splice(

            index,

            1

        );


    }


}



/*
====================================
DRAW
====================================
*/


draw(ctx, width, height) {


    const x =
        width / 2;


    const y =
        height / 2;



    ctx.save();



    ctx.translate(

        x,

        y

    );


    ctx.rotate(

        this.angle

    );



    /*
    Shadow
    */


    ctx.fillStyle =
        "rgba(0,0,0,.35)";


    ctx.beginPath();


    ctx.ellipse(

        0,

        18,

        14,

        6,

        0,

        0,

        Math.PI * 2

    );


    ctx.fill();



    /*
    Legs
    */


    ctx.fillStyle =
        "#1d1d1d";


    ctx.fillRect(

        -8,

        10,

        5,

        10

    );


    ctx.fillRect(

        3,

        10,

        5,

        10

    );



    /*
    Body
    */


    ctx.fillStyle =
        "#2B84FF";


    ctx.fillRect(

        -11,

        -8,

        22,

        22

    );



    /*
    Head
    */


    ctx.fillStyle =
        "#F3D4B5";


    ctx.beginPath();


    ctx.arc(

        0,

        -17,

        8,

        0,

        Math.PI * 2

    );


    ctx.fill();



    /*
    Flashlight
    */


    ctx.strokeStyle =
        "#D8D8D8";


    ctx.lineWidth = 3;


    ctx.beginPath();


    ctx.moveTo(

        10,

        0

    );


    ctx.lineTo(

        24,

        0

    );


    ctx.stroke();



    ctx.restore();


}



}
