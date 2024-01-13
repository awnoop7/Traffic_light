const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const w_width = canvas.width = window.innerWidth;
const w_height = canvas.height = window.innerHeight;

//light
ctx.beginPath();
ctx.fillStyle = "balck";
ctx.fillRect(w_width/2-50,w_height/2-220,100,300);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(w_width/2-40,w_height/2-210,80,80);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.fillRect(w_width/2-40,w_height/2-110,80,80);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(w_width/2-40,w_height/2-10,80,80);
ctx.fill();
ctx.closePath();

//stand
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.fillRect(w_width/2-10,w_height/2+80,20,100);
ctx.fill();
ctx.closePath();

//road
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(0,w_height/2+180,w_width,200);
ctx.fill();
ctx.closePath();

