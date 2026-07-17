/*
====================================
VISION SYSTEM
====================================
*/

export class Vision {


    static canSeePlayer(mimic, player) {


        if (!player) {

            return false;

        }



        const dx =
            player.worldX - mimic.worldX;


        const dy =
            player.worldY - mimic.worldY;



        const distance =
            Math.hypot(dx, dy);



        /*
        ================================
        RANGE
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



        let difference =
            playerAngle - mimic.angle;



        while (difference > Math.PI) {

            difference -= Math.PI * 2;

        }


        while (difference < -Math.PI) {

            difference += Math.PI * 2;

        }



        const fov =
            Math.PI / 2;



        if (Math.abs(difference) > fov) {

            return false;

        }



        /*
        ================================
        WALL CHECK
        ================================
        */


        if (
            mimic.world &&
            mimic.world.collision &&
            mimic.world.collision.lineBlocked
        ) {


            if (

                mimic.world.collision.lineBlocked(

                    mimic.worldX,
                    mimic.worldY,

                    player.worldX,
                    player.worldY

                )

            ) {

                return false;

            }


        }



        return true;


    }


}
