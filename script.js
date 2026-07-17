window.onload = function () {

    const play = document.getElementById("play");
    const settings = document.getElementById("settings");
    const credits = document.getElementById("credits");
    const quit = document.getElementById("quit");

    play.addEventListener("click", function () {

        window.location.href = "game.html";

    });

    settings.addEventListener("click", function () {

        alert("Settings Coming Soon");

    });

    credits.addEventListener("click", function () {

        alert("Project Mimic\nCreated by Owens");

    });

    quit.addEventListener("click", function () {

        alert("Close the tab to quit.");

    });

};
