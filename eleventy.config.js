module.exports = async function (eleventyConfig) {


	eleventyConfig.addGlobalData("layout", "top-bottom.html");
	eleventyConfig.addPassthroughCopy("assets/metacontent");
	eleventyConfig.addPassthroughCopy("assets/extra/");
	eleventyConfig.addPassthroughCopy("assets/js/");
	eleventyConfig.addPassthroughCopy("assets/pagetray/input/");

	eleventyConfig.ignores.add(".trash");
	eleventyConfig.ignores.add("readme.md");
	

	//eleventyConfig.addCollection("images", function (collectionApi) { 
	//	return glob(['assets/pagetray/**./input/*.{jpeg,jpg,png,webp}"]);
	//})
};

const fakepages = [
	{url: "assets/pagetray/1.png", sticker: false, pub_date: 11/12/25},
	{url: "assets/pagetray/2.png", sticker: false, pub_date: 11/12/25},
	{url: "assets/pagetray/3.png", sticker: false, pub_date: 11/12/25},
	{url: "assets/pagetray/4.png", sticker: false, pub_date: 11/12/25},
	{url: "assets/pagetray/5.png", sticker: false, pub_date: 11/12/25}
]

const fs = require("fs");
const path = require("path");
const { glob } = require('node:fs/promises');

(async () => {

	let files
	for await (const entry of glob("./input/*.{png,gif,webp,jpg,jpeg}"))
		console.log(entry);
		entry = files;
})();

