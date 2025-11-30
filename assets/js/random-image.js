/*give an image (prolly cover image) a class of "randomimg" and set the relevent images*/
/*bahaha you spelling relevant wrong- IDIOT!!!*/

document.addEventListener('DOMContentLoaded', function() {
	let pic_target = document.getElementsByClassName('randomimg'); 
	let pfp_target = document.getElementsByClassName('guest')

	if (pfp_target.length > 0) {
		superchoose(pfp_target, relevent);
	} else if (pic_target.length > 0) {
		superchoose(pic_target, relevent);
	}

	function superchoose(subject, items) {
		let choice
		let d = Math.floor(Math.random() * items.length);
		switch (subject) {
			case pic_target:
				choice = path + items[d];
				for (let superchosen of subject){
					superchosen.src = choice;	
				}
				break;
			case pfp_target: 
				let e = Math.floor(Math.random() * items[d].length);
				choice = path + items[d][e];
				for (let superchosen of subject) {
					superchosen.src = choice;
				}	
				break;
			default:
				break;
		}
		
		
	}
})

function oops_pfp(image) {
	image.src = "assets/metacontent/pfps/air8.webp"
}
