/*
====================================
INTERACTION
====================================
*/

export class Interaction {


static update(player, world, input, lootManager) {


    if (!input.pressed("e")) {

        return;

    }



    /*
    ====================================
    LOOT PICKUP
    ====================================
    */


    if (lootManager) {


        for (const loot of lootManager.getAll()) {


            if (loot.interact(player)) {


                if (!player.inventory) {

                    player.inventory = [];

                }


                player.inventory.push(

                    loot.type

                );


                console.log(

                    "Collected:",
                    loot.type

                );


                return;

            }


        }


    }




    /*
    ====================================
    DOOR INTERACTION
    ====================================
    */


    for (const building of world.buildings) {


        if (building.door.playerNear(player)) {


            building.door.toggle();


            return;


        }


    }



}



}
