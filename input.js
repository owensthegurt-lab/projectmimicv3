/*
====================================
INPUT
====================================
*/

export class Input {

    constructor() {

        this.keys = {};
        this.justPressed = {};

        window.addEventListener("keydown", e => {

            const key = e.key.toLowerCase();

            if (!this.keys[key]) {

                this.justPressed[key] = true;

            }

            this.keys[key] = true;

        });

        window.addEventListener("keyup", e => {

            const key = e.key.toLowerCase();

            this.keys[key] = false;

        });

    }

    down(key) {

        return this.keys[key];

    }

    pressed(key) {

        if (this.justPressed[key]) {

            this.justPressed[key] = false;
            return true;

        }

        return false;

    }

}
