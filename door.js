/*
====================================
DOOR
====================================
*/

export class Door {

    constructor(x, y, width = 24, height = 30) {

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.isOpen = false;

    }

    toggle() {

        this.isOpen = !this.isOpen;

    }

    draw(ctx, cameraX, cameraY) {

        ctx.fillStyle = this.isOpen
            ? "#6A4A24"
            : "#3E2814";

        ctx.fillRect(

            this.x - cameraX,
            this.y - cameraY,

            this.width,
            this.height

        );

    }

    playerNear(player) {

        const cx = this.x + this.width / 2;
        const cy = this.y + this.height / 2;

        const dx = player.worldX - cx;
        const dy = player.worldY - cy;

        return Math.sqrt(dx * dx + dy * dy) < 70;

    }

}
