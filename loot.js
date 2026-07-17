/*
====================================
LOOT
====================================
*/

export class Loot {


constructor(x, y, type = "supply") {


    this.x = x;

    this.y = y;


    this.type = type;


    this.collected = false;



    /*
    ====================================
    LOOT DATA
    ====================================
    */


    this.data = {


        battery: {

            name:"Battery",

            color:"#FFD700"

        },


        key: {

            name:"Key",

            color:"#C0C0C0"

        },


        supply: {

            name:"Supply",

            color:"#55AA55"

        }


    };



}





draw(ctx, cameraX, cameraY, originX, originY) {


    if(this.collected){

        return;

    }



    const item =
        this.data[this.type];



    ctx.fillStyle =
        item.color;



    ctx.fillRect(

        originX + this.x - cameraX - 5,

        originY + this.y - cameraY - 5,

        10,

        10

    );


}





interact(player){


    if(this.collected){

        return false;

    }



    const distance =
        Math.hypot(

            player.worldX - this.x,

            player.worldY - this.y

        );



    if(distance < 35){


        this.collected = true;


        return true;


    }



    return false;


}



}
