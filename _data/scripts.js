const fs = require('fs');

let a = fs.readFileSync('_data/comic_data.json');
let b = fs.readFileSync('_data/pagedata.json');

let comicData = JSON.parse(a);
let pageData = JSON.parse(b);

let choice = comicData.pageDefault

function defaulter(f) {
	console.log('f is equal to', f);
	pageData.forEach((page) => {
		Object.assign(page.assumed, page[f]);
	});
}

switch (choice) {
	case 'bw': case 'sketch': case 'color': case 'thumb':
		defaulter(choice);
		console.log("switched");
		break;
	default:
		console.log("No matching default, falling back to BW")
		defaulter(bw);
		break;
};

console.log(comicData.pageDefault, pageData[4].assumed);
