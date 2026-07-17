/*
====================================
CAMERA
====================================
*/

export class Camera {

    constructor() {

        this.x = 0;
        this.y = 0;

    }

    update(player, canvas) {

        this.x = player.worldX - canvas.width / 2;
        this.y = player.worldY - canvas.height / 2;

    }

}
