/*
====================================
UI
====================================
*/

export class UI {

    constructor() {

        this.font = "Arial";

    }

    draw(ctx, canvas, player, world) {

        let nearbyBuilding = null;

        // Find a nearby door
        for (const building of world.buildings) {

            if (building.door.playerNear(player)) {

                nearbyBuilding = building;
                break;

            }

        }

        // No nearby door
        if (!nearbyBuilding) return;

        const door = nearbyBuilding.door;

        /*
        ================================
        Prompt Background
        ================================
        */

        const boxWidth = 170;
        const boxHeight = 58;

        const x = canvas.width / 2 - boxWidth / 2;
        const y = canvas.height - 105;

        ctx.fillStyle = "rgba(0,0,0,.70)";
        ctx.fillRect(
            x,
            y,
            boxWidth,
            boxHeight
        );

        /*
        ================================
        E Button
        ================================
        */

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;

        ctx.strokeRect(

            canvas.width / 2 - 14,
            y + 8,

            28,
            28

        );

        ctx.fillStyle = "#FFFFFF";

        ctx.font = "18px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText(

            "E",

            canvas.width / 2,
            y + 22

        );

        /*
        ================================
        Prompt Text
        ================================
        */

        ctx.font = "15px Arial";

        const action = door.isOpen
            ? "Close"
            : "Open";

        ctx.fillText(

            `${action} ${nearbyBuilding.name}`,

            canvas.width / 2,
            y + 46

        );

    }

}
