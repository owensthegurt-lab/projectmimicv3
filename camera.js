/*
====================================
CAMERA
====================================
*/

export class Camera {

    constructor() {

        this.x = 0;
        this.y = 0;

        // Smooth camera
        this.followSpeed = 8;

    }

    update(player, canvas, delta) {

        const targetX = player.worldX - canvas.width / 2;
        const targetY = player.worldY - canvas.height / 2;

        this.x += (targetX - this.x) * this.followSpeed * delta;
        this.y += (targetY - this.y) * this.followSpeed * delta;

    }

}
