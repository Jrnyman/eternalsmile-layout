module.exports = async function (eleventyConfig) {

	//eleventyConfig.addGlobalData("permalink", "/{{ page.filePathStem }}.html");

	eleventyConfig.addGlobalData("layout", "top-bottom.html");
	eleventyConfig.addPassthroughCopy("assets/metacontent/icons");
	eleventyConfig.addPassthroughCopy("assets/metacontent/nav");
	eleventyConfig.addPassthroughCopy("assets/metacontent/fonts");
	eleventyConfig.addPassthroughCopy("assets/extra/");
	eleventyConfig.addPassthroughCopy("assets/js/");
	eleventyConfig.addPassthroughCopy("assets/pagetray/input/");

	eleventyConfig.ignores.add(".trash");
	eleventyConfig.ignores.add("readme.md");
	eleventyConfig.ignores.add("assets/metacontent/pfps");

	eleventyConfig.addFilter("r", function(value){
		let a = String(value)
		return a.slice(1);
	});

	eleventyConfig.addFilter("assumed", function(value, choice) {
		let a = String(value);
		a++;
		switch (choice) {
			case 'bw':
				return a + 'r.png';
				break;
			case 'sketch':
				return 'old/' + a + 's.png';
				break;
			case 'thumb':
				return 'old/' + a + 't.png';
				break;
			case 'color':
				return a + 'c.png';
				break;
			default:
				return a + 'r.png';
		};
	});
	
};

const path = require("path");
const { glob } = require('node:fs/promises');

