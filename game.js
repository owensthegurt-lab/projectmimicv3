const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(200, 200, 40, 0, Math.PI * 2);
ctx.fill();

console.log("game.js loaded");
