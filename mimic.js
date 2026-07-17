/*
====================================
MIMIC
====================================
*/

import { Vision } from "./vision.js";


export class Mimic {


constructor(x = 2500, y = 2500) {


    this.worldX = x;
    this.worldY = y;


    /*
    ==========================
    MOVEMENT
    ==========================
    */

    this.speed = 95;

    this.angle = 0;
    this.targetAngle = 0;

    this.targetX = x;
    this.targetY = y;



    /*
    ==========================
    AI
    ==========================
    */

    this.state = "idle";

    this.waitTimer = 3;


    /*
    SEARCH
    */

    this.searchTimer = 0;

    this.searchRadius = 180;



    /*
    PLAYER MEMORY
    */

    this.playerSeen = false;

    this.lastKnownX = x;
    this.lastKnownY = y;



    /*
    ==========================
    ANIMATION
    ==========================
    */

    this.walkCycle = 0;



    /*
    ==========================
    APPEARANCE
    ==========================
    */

    this.realForm = {

        bodyColor:"#090909",
        eyeColor:"#FFFFFF",

        headRadius:10,

        torsoWidth:18,
        torsoHeight:48,

        armLength:56,
        legLength:52

    };


    this.currentForm = this.realForm;

    this.disguise = null;


}




/*
====================================
UPDATE
====================================
*/

update(delta, world, player) {


    this.walkCycle += delta * 5;



    /*
    ==========================
    VISION
    ==========================
    */


    if(player && Vision.canSeePlayer(this, player)) {


        this.playerSeen = true;


        this.lastKnownX = player.worldX;
        this.lastKnownY = player.worldY;


        this.targetX = player.worldX;
        this.targetY = player.worldY;


        this.state = "roam";


    }



    switch(this.state) {



        case "idle":


            this.waitTimer -= delta;


            if(this.waitTimer <= 0) {


                this.chooseDestination(world);

                this.state = "roam";


            }


        break;




        case "watch":


            this.waitTimer -= delta;


            if(this.waitTimer <= 0) {


                this.chooseDestination(world);

                this.state = "roam";


            }


        break;




        case "search":


            this.searchTimer -= delta;



            if(Math.hypot(

                this.targetX - this.worldX,
                this.targetY - this.worldY

            ) < 10) {



                this.targetX =
                    this.lastKnownX +
                    (Math.random() - 0.5) *
                    this.searchRadius;



                this.targetY =
                    this.lastKnownY +
                    (Math.random() - 0.5) *
                    this.searchRadius;


            }



            this.move(delta);



            if(this.searchTimer <= 0) {


                this.state = "idle";

                this.waitTimer = 3;


            }


        break;




        case "roam":


            this.move(delta);


        break;


    }


}





/*
====================================
PATROL
====================================
*/

chooseDestination(world) {


    if(!world.patrolPoints ||
       world.patrolPoints.length === 0) {


        this.targetX =
            this.worldX +
            (Math.random()-0.5)*400;


        this.targetY =
            this.worldY +
            (Math.random()-0.5)*400;


        return;

    }



    const point =
        world.patrolPoints[

            Math.floor(

                Math.random() *
                world.patrolPoints.length

            )

        ];



    this.targetX = point.x;

    this.targetY = point.y;


}





/*
====================================
MOVE
====================================
*/

move(delta) {


    const dx =
        this.targetX - this.worldX;


    const dy =
        this.targetY - this.worldY;



    const dist =
        Math.hypot(dx,dy);



    if(dist < 8) {



        if(this.playerSeen) {


            this.playerSeen = false;


            this.state = "search";


            this.searchTimer = 10;


            return;


        }



        if(Math.random() < 0.35) {


            this.state = "watch";

            this.waitTimer =
                4 + Math.random()*4;


        }

        else {


            this.state = "idle";

            this.waitTimer =
                2 + Math.random()*3;


        }


        return;


    }




    this.targetAngle =
        Math.atan2(dy,dx);



    let diff =
        this.targetAngle - this.angle;



    while(diff > Math.PI)
        diff -= Math.PI*2;


    while(diff < -Math.PI)
        diff += Math.PI*2;



    this.angle +=
        diff * 5 * delta;




    this.worldX +=
        Math.cos(this.angle) *
        this.speed *
        delta;



    this.worldY +=
        Math.sin(this.angle) *
        this.speed *
        delta;


}





/*
====================================
DRAW
====================================
*/

draw(ctx,cameraX,cameraY) {


    const x =
        this.worldX-cameraX;


    const y =
        this.worldY-cameraY;



    const armSwing =
        Math.sin(this.walkCycle)*7;


    const legSwing =
        Math.sin(this.walkCycle)*5;



    ctx.save();


    ctx.translate(x,y);

    ctx.rotate(this.angle + Math.PI/2);



    ctx.fillStyle =
        "rgba(0,0,0,.45)";


    ctx.beginPath();


    ctx.ellipse(

        0,
        44,

        16,
        6,

        0,
        0,
        Math.PI*2

    );


    ctx.fill();



    ctx.strokeStyle =
        "#090909";


    ctx.lineWidth = 6;



    ctx.beginPath();


    ctx.moveTo(-10,-6);

    ctx.lineTo(-14+armSwing,50);



    ctx.moveTo(10,-6);

    ctx.lineTo(14-armSwing,50);



    ctx.stroke();




    ctx.fillStyle =
        this.currentForm.bodyColor;



    ctx.fillRect(

        -9,
        -20,

        18,
        52

    );



    ctx.beginPath();



    ctx.arc(

        0,
        -32,

        10,

        0,
        Math.PI*2

    );



    ctx.fill();




    ctx.fillStyle =
        this.currentForm.eyeColor;



    ctx.beginPath();



    ctx.arc(-3,-34,1.5,0,Math.PI*2);

    ctx.arc(3,-34,1.5,0,Math.PI*2);



    ctx.fill();




    ctx.strokeStyle =
        "#090909";


    ctx.lineWidth = 6;



    ctx.beginPath();



    ctx.moveTo(-6,30);

    ctx.lineTo(-6+legSwing,72);



    ctx.moveTo(6,30);

    ctx.lineTo(6-legSwing,72);



    ctx.stroke();



    ctx.restore();


}




/*
====================================
DISGUISE
====================================
*/

become(playerAppearance) {


    this.disguise = playerAppearance;

    this.currentForm = playerAppearance;


}



reveal() {


    this.disguise = null;

    this.currentForm = this.realForm;


}



}
