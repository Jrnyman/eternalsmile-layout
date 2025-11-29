/*give an image (prolly cover image) a class of "randomimg" and set the relevent images*/
/*bahaha you spelling relevant wrong- IDIOT!!!*/

document.addEventListener('DOMContentLoaded', function() {
	let pic_target = document.getElementsByClassName('randomimg'); 
	let pfp_target = document.getElementsByClassName('guest')
	let target = [pic_target, pfp_target]

	function choose() {
		let a = Math.floor(Math.random() * relevent.length);
		let choice = path + relevent[a];
		pic_target[0].src = choice;

	}

	if (target[0].length > 0 || target[1].length > 0) {
		switch (pfp_target[0]) {
			case undefined:
				break;
			default:
				superchoose();
		}	
	}
	switch (pic_target[0]) {
		case undefined:
			break;
		default:
			choose();
			break;
	}
	
	function superchoose() {
		let choice
		let d = Math.floor(Math.random() * relevent.length);
		let e = Math.floor(Math.random() * relevent[d].length);
		console.log(relevent[d][e])
		choice = path + relevent[d][e];
		for (let superchosen of pfp_target) {
			superchosen.src = choice;
		}
		
	}
})

function oops_pfp(image) {
	image.src = "assets/metacontent/pfps/air8.webp"
}
