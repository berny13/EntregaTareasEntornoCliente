var img1 = document.getElementById("imagen");
var ctx = img1.getContext("2d");
var ballRadius = 10;
var x = img1.width/2;
var y = img1.height-30;
var dx = 2;
var dy = -2;
var color = "#0095DD"
var img = new Image();
img.src = "rebota.jpg";

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.drawImage(img, 0, 0);
    ctx.fill();
    ctx.closePath();
}

img.onload = function(){
    ctx.drawImage(img, 0, 0);
  }


  function draw() {
    ctx.clearRect(0, 0, img1.width, img1.height);
    drawBall();
  
    if (x + dx > img1.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
      color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }
    if (y + dy > img1.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
      color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }
  
    x += dx;
    y += dy;
  }

setInterval(draw, 10);
