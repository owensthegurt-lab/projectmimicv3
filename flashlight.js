/*
====================================
FLASHLIGHT
====================================
*/

export class Flashlight {

    constructor() {

        this.radius = 260;

    }

    draw(ctx, canvas) {

        const x = canvas.width / 2;
        const y = canvas.height / 2;

        // Dark overlay
        ctx.save();

        ctx.fillStyle = "rgba(0,0,0,0.82)";
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        // Punch a hole in the darkness
        ctx.globalCompositeOperation = "destination-out";

        const gradient = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            this.radius
        );

        gradient.addColorStop(0, "rgba(0,0,0,1)");
        gradient.addColorStop(0.55, "rgba(0,0,0,0.75)");
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
