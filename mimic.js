class Mimic {


constructor(x = 2500, y = 2500) {


/*
====================================
POSITION
====================================
*/

this.worldX = x;
this.worldY = y;


/*
====================================
MOVEMENT
====================================
*/

this.speed = 95;

this.angle = 0;
this.targetAngle = 0;

this.targetX = x;
this.targetY = y;


/*
====================================
AI
====================================
*/

this.state = "idle";

this.waitTimer = 3;


/*
SEARCH
*/

this.searchTimer = 0;
this.searchRadius = 180;


/*
====================================
VISION
====================================
*/

this.playerSeen = false;

this.lastKnownX = x;
this.lastKnownY = y;


/*
====================================
ANIMATION
====================================
*/

this.walkCycle = 0;


/*
====================================
APPEARANCE
====================================
*/

this.realForm = {

    bodyColor:"#090909",
    eyeColor:"#FFFFFF",

    headRadius:10,

    torsoWidth:18,
    torsoHeight:52,

    armLength:56,
    legLength:52

};


this.currentForm = this.realForm;

this.disguise = null;


}



update(delta, world, player){


this.walkCycle += delta * 5;


/*
====================================
VISION
====================================
*/


if(player && Vision.canSeePlayer(this,player)){


    this.playerSeen = true;


    this.lastKnownX = player.worldX;
    this.lastKnownY = player.worldY;


    this.targetX = player.worldX;
    this.targetY = player.worldY;


    this.state = "roam";


}



switch(this.state){



case "idle":


    this.waitTimer -= delta;


    if(this.waitTimer <= 0){


        this.chooseDestination(world);

        this.state="roam";


    }


break;




case "watch":


    this.waitTimer -= delta;


    if(this.waitTimer <=0){


        this.chooseDestination(world);

        this.state="roam";


    }


break;




case "search":


    this.searchTimer -= delta;



    if(Math.hypot(

        this.targetX-this.worldX,
        this.targetY-this.worldY

    ) < 10){


        this.targetX =
        this.lastKnownX +
        (Math.random()-0.5) *
        this.searchRadius;



        this.targetY =
        this.lastKnownY +
        (Math.random()-0.5) *
        this.searchRadius;


    }



    this.move(delta);



    if(this.searchTimer <=0){


        this.state="idle";

        this.waitTimer=3;


    }


break;




case "roam":


    this.move(delta);


break;


}



}





move(delta){


let dx = this.targetX - this.worldX;
let dy = this.targetY - this.worldY;


let distance = Math.hypot(dx,dy);



if(distance < 8){



    if(this.playerSeen){


        this.playerSeen=false;


        this.state="search";


        this.searchTimer=10;


        return;


    }



    if(Math.random()<0.35){


        this.state="watch";

        this.waitTimer=
        4 + Math.random()*4;


    }

    else{


        this.state="idle";

        this.waitTimer=
        2 + Math.random()*3;


    }


    return;


}




this.angle =
Math.atan2(dy,dx);



this.worldX +=
Math.cos(this.angle) *
this.speed *
delta;



this.worldY +=
Math.sin(this.angle) *
this.speed *
delta;



}




chooseDestination(world){


let distance = 400;


this.targetX =
this.worldX +
(Math.random()-0.5) *
distance;



this.targetY =
this.worldY +
(Math.random()-0.5) *
distance;


}





draw(ctx,cameraX,cameraY){



let x =
this.worldX-cameraX;

let y =
this.worldY-cameraY;



ctx.save();



ctx.translate(x,y);



ctx.fillStyle =
this.currentForm.bodyColor;



// body

ctx.fillRect(

-this.currentForm.torsoWidth/2,

-this.currentForm.torsoHeight/2,

this.currentForm.torsoWidth,

this.currentForm.torsoHeight

);



// head

ctx.beginPath();

ctx.arc(

0,

-this.currentForm.torsoHeight/2,

this.currentForm.headRadius,

0,

Math.PI*2

);

ctx.fill();



// eyes

ctx.fillStyle =
this.currentForm.eyeColor;


ctx.beginPath();

ctx.arc(
-4,
-this.currentForm.torsoHeight/2,
2,
0,
Math.PI*2
);

ctx.arc(
4,
-this.currentForm.torsoHeight/2,
2,
0,
Math.PI*2
);


ctx.fill();



ctx.restore();



}



}
