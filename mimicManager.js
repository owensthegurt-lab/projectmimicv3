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


        const mimic = new Mimic(

            this.world.width * 0.75,
            this.world.height * 0.45

        );


        this.mimics.push(mimic);


    }



    spawn(x, y) {


        const mimic = new Mimic(x, y);


        this.mimics.push(mimic);


    }



    /*
    ====================================
    UPDATE
    ====================================
    */

    update(delta, player) {


        for (const mimic of this.mimics) {


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


        for (const mimic of this.mimics) {


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



        for (const mimic of this.mimics) {


            const dx =
                player.worldX -
                mimic.worldX;


            const dy =
                player.worldY -
                mimic.worldY;



            const distance =
                Math.hypot(dx, dy);



            if (distance < bestDistance) {


                bestDistance = distance;

                closest = mimic;


            }


        }


        return closest;


    }



}
