/*
====================================
MIMIC MANAGER
====================================
*/

import { Mimic } from "./mimic.js";


export class MimicManager {


constructor(world) {


    this.world = world;


    this.mimics = [];


    this.spawnInitialMimic();


}



/*
====================================
SPAWN
====================================
*/


spawnInitialMimic() {


    let spawn = {


        x: this.world.width * 0.75,

        y: this.world.height * 0.45


    };



    /*
    ====================================
    USE CUSTOM SPAWN POINT
    ====================================
    */


    if (

        this.world.mimicSpawnPoints &&

        this.world.mimicSpawnPoints.length > 0

    ) {


        spawn =
            this.world.mimicSpawnPoints[0];


    }



    const mimic = new Mimic(

        spawn.x,

        spawn.y

    );



    this.mimics.push(mimic);



}



spawn(x, y) {


    this.mimics.push(

        new Mimic(x, y)

    );


}



/*
====================================
UPDATE
====================================
*/


update(delta, player) {


    for(const mimic of this.mimics) {


        mimic.update(

            delta,

            this.world,

            player

        );


    }


}



/*
====================================
DRAW
====================================
*/


draw(ctx, camera) {


    for(const mimic of this.mimics) {


        mimic.draw(

            ctx,

            camera.x,

            camera.y

        );


    }


}



/*
====================================
GETTERS
====================================
*/


getAll() {


    return this.mimics;


}



getClosest(player) {


    let closest = null;

    let bestDistance = Infinity;



    for(const mimic of this.mimics) {


        const dx =
            player.worldX -
            mimic.worldX;


        const dy =
            player.worldY -
            mimic.worldY;



        const dist =
            Math.hypot(dx,dy);



        if(dist < bestDistance) {


            bestDistance = dist;

            closest = mimic;


        }


    }



    return closest;


}



}
