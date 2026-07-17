/*
====================================
MIMIC
====================================
*/

import { Vision } from "./vision.js";

export class Mimic {

    constructor(x = 2500, y = 2500) {

        /*
        ====================================
        POSITION
        ====================================
        */

        this.worldX = x;
        this.worldY = y;

        /*
        ====================================
        MOVEMENT
        ====================================
        */

        this.speed = 95;

        this.angle = 0;
        this.targetAngle = 0;

        this.targetX = x;
        this.targetY = y;

        /*
        ====================================
        AI
        ====================================
        */

        this.state = "idle";

        this.waitTimer = 3;

        /*
        ====================================
        VISION
        ====================================
        */

        this.playerSeen = false;

        this.lastKnownX = x;
        this.lastKnownY = y;

        /*
        ====================================
        ANIMATION
        ====================================
        */

        this.walkCycle = 0;

        /*
        ====================================
        APPEARANCE
        ====================================
        */

        this.realForm = {

            bodyColor: "#090909",
            eyeColor: "#FFFFFF",

            headRadius: 10,

            torsoWidth: 18,
            torsoHeight: 52,

            armLength: 56,
            legLength: 52

        };

        this.currentForm = this.realForm;

        this.disguise = null;

    }

    /*
    ====================================
    UPDATE
    ====================================
    */

    update(delta, world, player) {

        this.walkCycle += delta * 5;

        /*
        ====================================
        CAN SEE PLAYER?
        ====================================
        */

        if (Vision.canSeePlayer(this, player)) {

            this.playerSeen = true;

            this.lastKnownX = player.worldX;
            this.lastKnownY = player.worldY;

        }

        switch (this.state) {

            case "idle":

                this.waitTimer -= delta;

                if (this.waitTimer <= 0) {

                    this.chooseDestination(world);

                    this.state = "roam";

                }

                break;

            case "watch":

                this.waitTimer -= delta;

                if (this.waitTimer <= 0) {

                    this.chooseDestination(world);

                    this.state = "roam";

                }

                break;

            case "roam":

                if (this.playerSeen) {

                    this.targetX = this.lastKnownX;
                    this.targetY = this.lastKnownY;

                }

                this.move(delta);

                break;

        }

    }

    /*
    ====================================
    CHOOSE DESTINATION
    ====================================
    */

    chooseDestination(world) {

        const point = world.patrolPoints[
            Math.floor(
                Math.random() *
                world.patrolPoints.length
            )
        ];

        this.targetX = point.x;
        this.targetY = point.y;

    }

    /*
    ====================================
    MOVE
    ====================================
    */

    move(delta) {

        const dx = this.targetX - this.worldX;
        const dy = this.targetY - this.worldY;

        const distance = Math.hypot(dx, dy);

        if (distance < 8) {

            if (this.playerSeen) {

                this.playerSeen = false;

            }

            if (Math.random() < 0.35) {

                this.state = "watch";
                this.waitTimer = 4 + Math.random() * 4;

            } else {

                this.state = "idle";
                this.waitTimer = 2 + Math.random() * 3;

            }

            return;

        }

        this.targetAngle = Math.atan2(dy, dx);

        let diff = this.targetAngle - this.angle;

        while (diff > Math.PI)
            diff -= Math.PI * 2;

        while (diff < -Math.PI)
            diff += Math.PI * 2;

        this.angle += diff * 5 * delta;

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
    ====================================
    DRAW
    ====================================
    */

    draw(ctx, cameraX, cameraY) {

        const x = this.worldX - cameraX;
        const y = this.worldY - cameraY;

        const armSwing =
            Math.sin(this.walkCycle) * 7;

        const legSwing =
            Math.sin(this.walkCycle) * 5;

        ctx.save();

        ctx.translate(x, y);
        ctx.rotate(this.angle + Math.PI / 2);

        // Shadow

        ctx.fillStyle = "rgba(0,0,0,.45)";

        ctx.beginPath();
        ctx.ellipse(0, 44, 16, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Arms

        ctx.strokeStyle = "#090909";
        ctx.lineWidth = 6;

        ctx.beginPath();

        ctx.moveTo(-10, -6);
        ctx.lineTo(-14 + armSwing, 50);

        ctx.moveTo(10, -6);
        ctx.lineTo(14 - armSwing, 50);

        ctx.stroke();

        // Torso

        ctx.fillStyle = "#090909";
        ctx.fillRect(-9, -20, 18, 52);

        // Head

        ctx.beginPath();
        ctx.arc(0, -32, 10, 0, Math.PI * 2);
        ctx.fill();

        // Eyes

        ctx.fillStyle = "#FFFFFF";

        ctx.beginPath();
        ctx.arc(-3, -34, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(3, -34, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Legs

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
    ====================================
    FUTURE DISGUISE
    ====================================
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
