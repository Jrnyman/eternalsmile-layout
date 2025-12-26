const fs = require('fs');

let a = fs.readFileSync('_data/comic_data.json');
let b = fs.readFileSync('_data/pagedata.json');

let comicData = JSON.parse(a);
let pageData = JSON.parse(b);

if (comicData.pageDefault == 'bw') {
	console.log("its bw!");
	pageData[0].assumed = "i've been touched!";
};

console.log(comicData.pageDefault, pageData[0].assumed);
