/*
====================================
COLLISION
====================================
*/

export class CollisionSystem {


static playerCollision(player, world) {


    for (const building of world.buildings) {



        const padding = player.radius;



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



                const wx =
                    building.x + wall.x;


                const wy =
                    building.y + wall.y;



                if (

                    player.worldX + padding > wx &&
                    player.worldX - padding < wx + wall.width &&

                    player.worldY + padding > wy &&
                    player.worldY - padding < wy + wall.height

                ) {

                    return true;

                }


            }



            continue;


        }




        /*
        ====================================
        OUTSIDE BUILDING WALL
        ====================================
        */


        if (

            player.worldX + padding > building.x &&
            player.worldX - padding < building.x + building.width &&

            player.worldY + padding > building.y &&
            player.worldY - padding < building.y + building.height

        ) {



            if(building.door.isOpen) {


                const door = building.door;



                if(

                    player.worldX + padding > door.x &&
                    player.worldX - padding < door.x + door.width &&

                    player.worldY + padding > door.y &&
                    player.worldY - padding < door.y + door.height

                ){

                    continue;

                }


            }



            return true;


        }



    }



    return false;


}


}
