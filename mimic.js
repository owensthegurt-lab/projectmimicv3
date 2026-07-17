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

    // NEW SEARCH VARIABLES
    this.searchTimer = 0;
    this.searchRadius = 180;

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
