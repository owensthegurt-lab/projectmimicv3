/*
====================================
LOOT MANAGER
====================================
*/

import { Loot } from "./loot.js";


export class LootManager {


constructor(world) {

    this.world = world;

    this.loot = [];

    this.createWorldLoot();

}



/*
====================================
CREATE LOOT
====================================
*/

createWorldLoot() {


    /*
    ================================
    PLAYER HOUSE
    ================================
    */


    const house =
        this.world.buildings[0];


    this.addLoot(

        house,

        80,
        80,

        "supply"

    );


    this.addLoot(

        house,

        300,
        80,

        "battery"

    );


    this.addLoot(

        house,

        90,
        250,

        "key"

    );



    /*
    ================================
    STORE
    ================================
    */


    const store =
        this.world.buildings[1];


    this.addLoot(

        store,

        150,
        120,

        "supply"

    );


    this.addLoot(

        store,

        260,
        100,

        "battery"

    );



    /*
    ================================
    HOSPITAL
    ================================
    */


    const hospital =
        this.world.buildings[3];


    this.addLoot(

        hospital,

        120,
        100,

        "supply"

    );


    this.addLoot(

        hospital,

        300,
        150,

        "battery"

    );


}



/*
====================================
ADD LOOT
====================================
*/

addLoot(building, x, y, type) {


    this.loot.push(

        {

            building,

            item:
            new Loot(

                x,

                y,

                type

            )

        }

    );


}



/*
====================================
UPDATE
====================================
*/

update() {


}



/*
====================================
INTERACTION
====================================
*/

interact(player) {


    for(const entry of this.loot) {


        if(entry.item.interact(player)) {


            console.log(

                "Collected:",
                entry.item.type

            );


            return entry.item;


        }


    }


    return null;


}



/*
====================================
DRAW
====================================
*/

draw(ctx, cameraX, cameraY) {


    for(const entry of this.loot) {


        entry.item.draw(

            ctx,

            cameraX,

            cameraY,

            entry.building.x,

            entry.building.y

        );


    }


}



}
