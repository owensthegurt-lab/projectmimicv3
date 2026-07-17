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


    this.spawnLoot();


}



/*
====================================
SPAWN LOOT
====================================
*/

spawnLoot() {


    /*
    ================================
    PLAYER HOUSE
    ================================
    */


    this.addLoot(

        60,

        60,

        "supply",

        this.world.buildings[0]

    );


    this.addLoot(

        300,

        70,

        "battery",

        this.world.buildings[0]

    );


    this.addLoot(

        90,

        250,

        "key",

        this.world.buildings[0]

    );



    /*
    ================================
    STORE
    ================================
    */


    this.addLoot(

        100,

        100,

        "supply",

        this.world.buildings[1]

    );


    this.addLoot(

        220,

        200,

        "battery",

        this.world.buildings[1]

    );



    /*
    ================================
    POLICE STATION
    ================================
    */


    this.addLoot(

        150,

        120,

        "key",

        this.world.buildings[2]

    );


    /*
    ================================
    HOSPITAL
    ================================
    */


    this.addLoot(

        200,

        180,

        "supply",

        this.world.buildings[3]

    );


}



/*
====================================
CREATE LOOT
====================================
*/


addLoot(x, y, type, building) {


    const loot = new Loot(

        x,

        y,

        type

    );


    loot.building = building;


    this.loot.push(loot);


}



/*
====================================
UPDATE
====================================
*/

update(delta) {

    // Reserved for future:
    // animations
    // spawning
    // rarity systems

}



/*
====================================
DRAW
====================================
*/

draw(ctx, cameraX, cameraY) {


    for(const item of this.loot) {


        if(item.collected) {

            continue;

        }



        if(!item.building) {

            continue;

        }



        item.draw(

            ctx,

            cameraX,

            cameraY,

            item.building.x,

            item.building.y

        );


    }


}



/*
====================================
GET ALL
====================================
*/

getAll() {


    return this.loot;


}



}
