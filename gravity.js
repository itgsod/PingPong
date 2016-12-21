#canvas {
	display: block;
	border: 1px solid blue;
	margin: 50px auto;
}
<!-- Lets make a bouncing ball in canvas using simple physics -->
<canvas id="canvas"></canvas>

// Now some basic canvas stuff. Here we'll make a variable for the canvas and then initialize its 2d context for drawing
var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

// Now setting the width and height of the canvas
var W = 350,
		H = 450;

// Applying these to the canvas element
canvas.height = H; canvas.width = W;

// First of all we'll create a ball object which will contain all the methods and variables specific to the ball.
// Lets define some variables first

var ball = {},
		gravity = 0.2,
		bounceFactor = 0.7;

// The ball object
// It will contain the following details
// 1) Its x and y position
// 2) Radius and color
// 3) Velocity vectors
// 4) the method to draw or paint it on the canvas

ball = {
	x: W/2,
	y: 50,
	
	radius: 15,
	color: "red",
	
	// Velocity components
	vx: 0,
	vy: 1,
	
	draw: function() {
		// Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
};

// When we do animations in canvas, we have to repaint the whole canvas in each frame. Either clear the whole area or paint it with some color. This helps in keeping the area clean without any repetition mess.
// So, lets create a function that will do it for us.
function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
}

// A function that will update the position of the ball is also needed. Lets create one
function update() {
	clearCanvas();
	ball.draw();
	
	// Now, lets make the ball move by adding the velocity vectors to its position
	ball.y += ball.vy;
	// Ohh! The ball is moving!
	// Lets add some acceleration
	ball.vy += gravity;
	//Perfect! Now, lets make it rebound when it touches the floor
	if(ball.y + ball.radius > H) {
		// First, reposition the ball on top of the floor and then bounce it!
		ball.y = H - ball.radius;
		ball.vy *= -bounceFactor;
		// The bounceFactor variable that we created decides the elasticity or how elastic the collision will be. If it's 1, then the collision will be perfectly elastic. If 0, then it will be inelastic.
	}
}

// Now, the animation time!
// in setInterval, 1000/x depicts x fps! So, in this casse, we are aiming for 60fps for smoother animations.
setInterval(update, 1000/60);

// This completes the tutorial here. Try experimenting with different values to get a better understanding.
