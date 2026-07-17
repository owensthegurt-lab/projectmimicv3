/*
====================================
RENDERER
====================================
*/

export class Renderer {


constructor(ctx, canvas) {

    this.ctx = ctx;

    this.canvas = canvas;

}



/*
====================================
RENDER
====================================
*/

render(world, player, camera, mimicManager, lootManager) {


    const ctx = this.ctx;



    /*
    ====================================
    CLEAR SCREEN
    ====================================
    */


    ctx.clearRect(

        0,

        0,

        this.canvas.width,

        this.canvas.height

    );



    /*
    ====================================
    WORLD
    ====================================
    */


    world.draw(

        ctx,

        camera.x,

        camera.y,

        this.canvas.width,

        this.canvas.height,

        player

    );



    /*
    ====================================
    LOOT
    ====================================
    */


    if(lootManager) {


        lootManager.draw(

            ctx,

            camera.x,

            camera.y

        );


    }



    /*
    ====================================
    MIMIC
    ====================================
    */


    if(mimicManager) {


        mimicManager.draw(

            ctx,

            camera

        );


    }



    /*
    ====================================
    PLAYER
    ====================================
    */


    player.draw(

        ctx,

        this.canvas.width,

        this.canvas.height

    );



    /*
    ====================================
    UI
    ====================================
    */


    this.drawInventory(

        player

    );


}



/*
====================================
INVENTORY UI
====================================
*/

drawInventory(player) {


    const ctx = this.ctx;


    ctx.fillStyle =
        "rgba(0,0,0,.5)";


    ctx.fillRect(

        15,

        15,

        180,

        100

    );



    ctx.fillStyle =
        "#FFFFFF";


    ctx.font =
        "14px Arial";


    ctx.fillText(

        "Inventory",

        25,

        40

    );



    if(player.inventory.length === 0) {


        ctx.fillText(

            "Empty",

            25,

            65

        );


        return;

    }



    let y = 65;



    for(const item of player.inventory) {


        ctx.fillText(

            "- " + item,

            25,

            y

        );


        y += 18;


    }


}



}
