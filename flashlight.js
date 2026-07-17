/*
====================================
FLASHLIGHT
====================================
*/

export class Flashlight {

    constructor() {

        this.radius = 220;

    }

    draw(ctx, canvas, player) {

        ctx.save();

        ctx.fillStyle = "rgba(0,0,0,0.90)";
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.globalCompositeOperation = "destination-out";

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        const gradient = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            this.radius
        );

        gradient.addColorStop(0, "rgba(0,0,0,1)");
        gradient.addColorStop(0.6, "rgba(0,0,0,.8)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(
            x,
            y,
            this.radius,
            0,
            Math.PI * 2
        );
        ctx.fill();

        ctx.restore();

    }

}
