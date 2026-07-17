const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Black background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// White circle
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(200, 200, 30, 0, Math.PI * 2);
ctx.fill();

// White text
ctx.font = "30px Arial";
ctx.fillText("PROJECT MIMIC", 250, 210);

console.log("Canvas:", canvas.width, canvas.height);
