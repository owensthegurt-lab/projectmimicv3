/*
====================================
COLLISION
====================================
*/

export class CollisionSystem {



static playerCollision(player, world) {



    for (const building of world.buildings) {



        const insideBuilding =

            player.worldX > building.x &&
            player.worldX < building.x + building.width &&

            player.worldY > building.y &&
            player.worldY < building.y + building.height;



        /*
        ====================================
        INSIDE BUILDING
        ====================================
        */

        if (insideBuilding) {



            for (const wall of building.interior.walls) {



                const wallX =
                    building.x + wall.x;


                const wallY =
                    building.y + wall.y;



                const padding =
                    player.radius;



                if (

                    player.worldX + padding > wallX &&

                    player.worldX - padding < wallX + wall.width &&

                    player.worldY + padding > wallY &&

                    player.worldY - padding < wallY + wall.height

                ) {


                    return true;


                }



            }



            // Interior floor is walkable

            continue;


        }




        /*
        ====================================
        OUTSIDE BUILDING
        ====================================
        */


        const padding =
            player.radius;



        if (


            player.worldX + padding > building.x &&

            player.worldX - padding < building.x + building.width &&

            player.worldY + padding > building.y &&

            player.worldY - padding < building.y + building.height


        ) {



            /*
            Door opening
            */


            if(building.door.isOpen) {



                const door =
                    building.door;



                const inDoorway =


                    player.worldX > door.x &&

                    player.worldX < door.x + door.width &&

                    player.worldY >

                    building.y + building.height - 45;



                if(inDoorway) {


                    continue;


                }


            }



            return true;



        }



    }



    return false;



}



}
