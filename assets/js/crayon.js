const canvas = document.getElementById("crayon");
const currentpage = document.getElementById("currentpage");
const context = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

function resize() {
	context.canvas.width = currentpage.width;
	context.canvas.height = currentpage.height;
}

resize()

function start(event) {
	document.addEventListener("mousemove", draw);
	reposition(event);
}

function reposition(event) {
	coord.x = event.pageX - canvas.offsetLeft;
	coord.y = event.pageY - canvas.offsetTop;
}

function stop() {
	document.removeEventListener("mousemove", draw);
}

function draw(event) {
	context.beginPath();
	context.lineWidth = 3;
	context.lineCap = "round";
	context.strokeStyle = "#272826";
	context.moveTo(coord.x, coord.y);
	reposition(event);
	context.lineTo(coord.x, coord.y);
	context.stroke();
}
