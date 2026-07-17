/*
====================================
MOUSE
====================================
*/

export class Mouse {

    constructor(canvas) {

        this.x = 0;
        this.y = 0;

        canvas.addEventListener("mousemove", (e) => {

            const rect = canvas.getBoundingClientRect();

            this.x = e.clientX - rect.left;
            this.y = e.clientY - rect.top;

        });

    }

}
