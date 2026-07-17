/*
====================================
MIMIC
====================================
*/

export class Mimic {

    constructor(x = 2500, y = 2500) {

        /*
        ==========================
        WORLD POSITION
        ==========================
        */

        this.worldX = x;
        this.worldY = y;

        /*
        ==========================
        MOVEMENT
        ==========================
        */

        this.speed = 110;

        this.angle = 0;

        this.targetX = x;
        this.targetY = y;

        /*
        ==========================
        AI
        ==========================
        */

        this.state = "idle";

        this.waitTimer = 2;

        /*
        ==========================
        ANIMATION
        ==========================
        */

        this.walkCycle = 0;

        /*
        ==========================
        DISGUISE SYSTEM
        ==========================
        */

        this.realForm = {

            bodyColor: "#090909",
            eyeColor: "#FFFFFF",

            headRadius: 10,

            torsoWidth: 18,
            torsoHeight: 48,

            armLength: 56,
            legLength: 52

        };

        this.currentForm = this.realForm;

        this.disguise = null;

    }

    /*
    ==================================
    UPDATE
    ==================================
    */

    update(delta, world) {

        this.walkCycle += delta * 6;

        switch (this.state) {

            case "idle":

                this.waitTimer -= delta;

                if (this.waitTimer <= 0) {

                    this.chooseDestination(world);

                    this.state = "roam";

                }

                break;

            case "roam":

                this.move(delta);

                break;

        }

    }

    /*
    ==================================
    CHOOSE DESTINATION
    ==================================
    */

    chooseDestination(world) {

        this.targetX = Math.random() * world.width;
        this.targetY = Math.random() * world.height;

    }

    /*
    ==================================
    MOVE
    ==================================
    */

    move(delta) {

        const dx = this.targetX - this.worldX;
        const dy = this.targetY - this.worldY;

        const dist = Math.hypot(dx, dy);

        if (dist < 6) {

            this.state = "idle";
            this.waitTimer = 2 + Math.random() * 3;

            return;

        }

        this.angle = Math.atan2(dy, dx);

        this.worldX +=
            Math.cos(this.angle) *
            this.speed *
            delta;

        this.worldY +=
            Math.sin(this.angle) *
            this.speed *
            delta;

    }

    /*
    ==================================
    DRAW
    ==================================
    */

    draw(ctx, cameraX, cameraY) {

        const x = this.worldX - cameraX;
        const y = this.worldY - cameraY;

        const armSwing =
            Math.sin(this.walkCycle) * 8;

        const legSwing =
            Math.sin(this.walkCycle) * 6;

        ctx.save();

        ctx.translate(x, y);
        ctx.rotate(this.angle + Math.PI / 2);

        /*
        Shadow
        */

        ctx.fillStyle = "rgba(0,0,0,.45)";

        ctx.beginPath();

        ctx.ellipse(

            0,
            44,

            16,
            6,

            0,
            0,
            Math.PI * 2

        );

        ctx.fill();

        /*
        Arms
        */

        ctx.strokeStyle = "#090909";
        ctx.lineWidth = 6;

        ctx.beginPath();

        ctx.moveTo(-10, -6);
        ctx.lineTo(-14 + armSwing, 48);

        ctx.moveTo(10, -6);
        ctx.lineTo(14 - armSwing, 48);

        ctx.stroke();

        /*
        Torso
        */

        ctx.fillStyle = "#090909";

        ctx.fillRect(

            -9,
            -20,

            18,
            52

        );

        /*
        Head
        */

        ctx.beginPath();

        ctx.arc(

            0,
            -32,

            10,

            0,
            Math.PI * 2

        );

        ctx.fill();

        /*
        Eyes
        */

        ctx.fillStyle = "#F8F8F8";

        ctx.beginPath();
        ctx.arc(-3, -34, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(3, -34, 1.5, 0, Math.PI * 2);
        ctx.fill();

        /*
        Legs
        */

        ctx.strokeStyle = "#090909";
        ctx.lineWidth = 6;

        ctx.beginPath();

        ctx.moveTo(-6, 30);
        ctx.lineTo(-6 + legSwing, 72);

        ctx.moveTo(6, 30);
        ctx.lineTo(6 - legSwing, 72);

        ctx.stroke();

        ctx.restore();

    }

    /*
    ==================================
    FUTURE DISGUISE SYSTEM
    ==================================
    */

    become(playerAppearance) {

        this.disguise = playerAppearance;
        this.currentForm = playerAppearance;

    }

    reveal() {

        this.disguise = null;
        this.currentForm = this.realForm;

    }

}
