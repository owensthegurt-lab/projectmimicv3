/*
====================================
INTERACTION
====================================
*/

export class Interaction {

    static update(player, world, input) {

        if (!input.pressed("e")) return;

        for (const building of world.buildings) {

            if (building.door.playerNear(player)) {

                building.door.toggle();

                break;

            }

        }

    }

}
