/*
====================================
VISION SYSTEM
====================================
*/

export class Vision {


    /*
    ====================================
    CHECK PLAYER VISIBILITY
    ====================================
    */

    static canSeePlayer(mimic, player) {


        if (!player) {

            return false;

        }



        const dx =
            player.worldX -
            mimic.worldX;


        const dy =
            player.worldY -
            mimic.worldY;



        const distance =
            Math.hypot(dx, dy);



        /*
        ================================
        VISION RANGE
        ================================
        */

        const visionRange = 350;



        if (distance > visionRange) {

            return false;

        }



        /*
        ================================
        FIELD OF VIEW
        ================================
        */


        const playerAngle =
            Math.atan2(dy, dx);



        let angleDifference =
            playerAngle - mimic.angle;



        while (angleDifference > Math.PI) {

            angleDifference -= Math.PI * 2;

        }


        while (angleDifference < -Math.PI) {

            angleDifference += Math.PI * 2;

        }



        const fieldOfView =
            Math.PI / 2;



        if (Math.abs(angleDifference) > fieldOfView) {

            return false;

        }



        /*
        ================================
        LINE OF SIGHT
        ================================
        */


        if (mimic.world && mimic.world.isBlocked) {


            const blocked =
                mimic.world.isBlocked(

                    mimic.worldX,
                    mimic.worldY,
                    player.worldX,
                    player.worldY

                );


            if (blocked) {

                return false;

            }

        }



        return true;


    }



}
