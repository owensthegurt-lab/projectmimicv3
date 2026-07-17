```javascript
/*
========================================
PROJECT MIMIC
Main Menu
========================================
*/

window.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("play")
        ?.addEventListener("click", () => {

            window.location.href = "game.html";

        });

    document
        .getElementById("settings")
        ?.addEventListener("click", () => {

            alert("Settings coming soon.");

        });

    document
        .getElementById("credits")
        ?.addEventListener("click", () => {

            alert(
`PROJECT MIMIC

Created by Owens

Pre-Alpha`
            );

        });

    document
        .getElementById("quit")
        ?.addEventListener("click", () => {

            alert("Close the tab to quit.");

        });

});
```
