/*give an image (prolly cover image) a class of "randomimg" and set the relevent images*/

document.addEventListener('DOMContentLoaded', function() {
	let pic_target = document.getElementsByClassName('randomimg'); 

	function choose() {
		var a = Math.floor(Math.random() * relevent.length);
		var choice = path + relevent[a];
		pic_target[0].src = choice;

	}

	switch (pic_target[0]) {
		case undefined:
			break;
		default:
			choose();
			break;
	}
	
})


