/*
====================================
PROJECT MIMIC MENU
====================================
*/

const play = document.getElementById("play");
const party = document.getElementById("party");
const settings = document.getElementById("settings");
const credits = document.getElementById("credits");
const quit = document.getElementById("quit");

// SINGLEPLAYER
play.addEventListener("click", () => {

    window.location.href = "game.html";

});

// LOCAL PARTY
party.addEventListener("click", () => {

    alert("Local Party is coming soon!");

});

// SETTINGS
settings.addEventListener("click", () => {

    alert("Settings menu coming soon!");

});

// CREDITS
credits.addEventListener("click", () => {

    alert(
`PROJECT MIMIC

Created by:
Owens

Powered by:
HTML
CSS
JavaScript

Made with ChatGPT`
    );

});

// QUIT
quit.addEventListener("click", () => {

    if (confirm("Exit Project Mimic?")) {

        window.location.href = "https://www.google.com";

    }

});
