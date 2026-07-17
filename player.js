/*
====================================
PLAYER
====================================
*/

class Player {

    constructor() {

        this.x = 400;
        this.y = 300;

        this.radius = 15;

        this.speed = 300;

    }

    update(delta, keys) {

        if (keys["w"]) this.y -= this.speed * delta;
        if (keys["s"]) this.y += this.speed * delta;
        if (keys["a"]) this.x -= this.speed * delta;
        if (keys["d"]) this.x += this.speed * delta;

    }

    draw(ctx) {

        // Shadow
        ctx.fillStyle = "rgba(0,0,0,.35)";

        ctx.beginPath();

        ctx.ellipse(
            this.x,
            this.y + 12,
            14,
            6,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        // Player
        ctx.fillStyle = "white";

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}
