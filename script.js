```javascript id="w8xk3f"
/*
========================================
PROJECT MIMIC
Main Menu
========================================
*/

window.addEventListener("DOMContentLoaded", () => {

    const playButton = document.getElementById("play");
    const settingsButton = document.getElementById("settings");
    const creditsButton = document.getElementById("credits");
    const quitButton = document.getElementById("quit");

    if (playButton) {
        playButton.addEventListener("click", startGame);
    }

    if (settingsButton) {
        settingsButton.addEventListener("click", openSettings);
    }

    if (creditsButton) {
        creditsButton.addEventListener("click", openCredits);
    }

    if (quitButton) {
        quitButton.addEventListener("click", quitGame);
    }

});

function startGame() {

    document.body.style.transition = "opacity .5s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "game.html";

    }, 500);

}

function openSettings() {

    alert("Settings are coming soon.");

}

function openCredits() {

    alert(
`PROJECT MIMIC

Created by Owens

Powered by HTML, CSS & JavaScript

More credits will be added during development.`
    );

}

function quitGame() {

    alert("Close this tab to quit Project Mimic.");

}
```

