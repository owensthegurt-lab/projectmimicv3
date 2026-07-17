/*
====================================
FLASHLIGHT
====================================
*/

export class Flashlight {

    constructor() {

        this.radius = 220;

    }

    draw(ctx, width, height) {

        // Dark overlay
        ctx.fillStyle = "rgba(0,0,0,0.92)";
        ctx.fillRect(0, 0, width, height);

        // Cut out flashlight beam
        ctx.save();

        ctx.globalCompositeOperation = "destination-out";

        const gradient = ctx.createRadialGradient(

            width / 2,
            height / 2,

            0,

            width / 2,
            height / 2,

            this.radius

        );

        gradient.addColorStop(0, "rgba(0,0,0,1)");
        gradient.addColorStop(0.6, "rgba(0,0,0,.8)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
            width / 2,
            height / 2,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();

    }

}
