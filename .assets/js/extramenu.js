var iframe = document.getElementById('tildemenu');

function toggle() {
	if (iframe.style.display === "none") {
		iframe.style.display = "block";
		setTimeout(function(){
			iframe.style.transform = "translateY(0)";
		}, 10);
	} else {
		iframe.style.transform = "translateY(-100%)";
		setTimeout(function(){
			iframe.style.display = "none";
		}, 450);
	}
}

document.addEventListener("keydown", (event) => {
	if ((event.shiftKey) && event.key === "~") {
		console.log("naw, bro tryna see");
		toggle();
	}

	// gonna try to pull the themes now
	

})
