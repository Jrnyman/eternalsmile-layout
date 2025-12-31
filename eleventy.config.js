module.exports = async function (eleventyConfig) {

	//eleventyConfig.addGlobalData("permalink", "/{{ page.filePathStem }}.html");

	eleventyConfig.addGlobalData("layout", "top-bottom.html");
	eleventyConfig.addPassthroughCopy("assets/metacontent");
	eleventyConfig.addPassthroughCopy("assets/extra/");
	eleventyConfig.addPassthroughCopy("assets/js/");
	eleventyConfig.addPassthroughCopy("assets/pagetray/input/");

	eleventyConfig.ignores.add(".trash");
	eleventyConfig.ignores.add("readme.md");

	eleventyConfig.addFilter("r", function(value){
		let a = String(value)
		return a.slice(1);
	});

	eleventyConfig.addFilter("assumed", function(value, choice) {
		let a = String(value);
		switch (choice) {
			case 'bw':
				return a + 'r.png';
			case 'sketch':
				return a + 's.png';
			case 'thumb':
				return a + 't.png';
			case 'color':
				return a + 'c.png';
		};
	});
	
	//eleventyConfig.addCollection("images", function (collectionApi) { 
	//	return glob(['assets/pagetray/**./input/*.{jpeg,jpg,png,webp}"]);
	//})
};

const path = require("path");
const { glob } = require('node:fs/promises');

//(async () => {
//
//	let files
//	for await (const entry of glob("./input/*.{png,gif,webp,jpg,jpeg}"))
//		console.log(entry);
//		entry = files;
//})();

