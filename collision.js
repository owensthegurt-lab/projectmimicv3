/*
====================================
COLLISION
====================================
*/

class CollisionSystem {

    static checkPlayer(player, world) {

        for (const building of world.buildings) {

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
