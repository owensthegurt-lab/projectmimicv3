/*
====================================
COLLISION SYSTEM
====================================
*/

export class CollisionSystem {

    static circleRect(circleX, circleY, radius, rect) {

        const closestX = Math.max(
            rect.x,
            Math.min(circleX, rect.x + rect.width)
        );

        const closestY = Math.max(
            rect.y,
            Math.min(circleY, rect.y + rect.height)
        );

        const dx = circleX - closestX;
        const dy = circleY - closestY;

        return (dx * dx + dy * dy) < (radius * radius);

    }

    static playerCollision(player, world) {

        for (const building of world.buildings) {

            if (

                CollisionSystem.circleRect(

                    player.worldX,
                    player.worldY,
                    player.radius,

                    building

                )

            ) {

                return true;

            }

        }

        return false;

    }

}
