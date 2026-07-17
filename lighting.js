/*
====================================
LIGHTING ENGINE
====================================
*/

export class Lighting {

    constructor() {

        this.length = 550;
        this.spread = Math.PI / 4;

    }

    draw(ctx, canvas, player) {

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        ctx.save();

        // Darkness
        ctx.fillStyle = "rgba(0,0,0,0.88)";
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Remove light from darkness
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
        gradient.addColorStop(.45, "rgba(0,0,0,.9)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.moveTo(0,0);

        ctx.arc(
            0,
            0,
            this.length,
            -this.spread,
            this.spread
        );

        ctx.closePath();

        ctx.fill();

        ctx.restore();

    }

}
