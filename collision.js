/*
====================================
COLLISION
====================================
*/

export class CollisionSystem {

    static playerCollision(player, world) {

        for (const building of world.buildings) {

            // If the door is open, allow entering through the doorway
            if (building.door.isOpen) {

                const door = building.door;

                const inDoorway =

                    player.worldX > door.x &&
                    player.worldX < door.x + door.width &&
                    player.worldY > building.y + building.height - 45;

                if (inDoorway) {

                    continue;

                }

            }

            const padding = player.radius;

            if (

                player.worldX + padding > building.x &&
                player.worldX - padding < building.x + building.width &&
                player.worldY + padding > building.y &&
                player.worldY - padding < building.y + building.height

            ) {

                return true;

            }

        }

        return false;

    }

}
