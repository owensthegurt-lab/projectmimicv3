/*
====================================
FLASHLIGHT
====================================
*/

export class Flashlight {

    constructor() {

        this.length = 500;
        this.width = Math.PI / 5;

    }

    draw(ctx, canvas, player) {

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        ctx.save();

        // Darkness
        ctx.fillStyle = "rgba(0,0,0,0.72)";
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Light Cone
        ctx.globalCompositeOperation = "destination-out";

        ctx.translate(x, y);
        ctx.rotate(player.angle);

        const gradient = ctx.createRadialGradient(
            0,
            0,
            0,
            0,
            0,
            this.length
        );

        gradient.addColorStop(0, "rgba(0,0,0,1)");
        gradient.addColorStop(.65, "rgba(0,0,0,.65)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.moveTo(0, 0);

        ctx.arc(
            0,
            0,
            this.length,
            -this.width,
            this.width
        );

        ctx.closePath();

        ctx.fill();

        ctx.restore();

    }

}
