module.exports = function (eleventyConfig) {


	eleventyConfig.addPassthroughCopy("assets/metacontent");
	eleventyConfig.addPassthroughCopy("assets/pagetray/");
	eleventyConfig.addPassthroughCopy("assets/extra/");
	eleventyConfig.addPassthroughCopy("assets/js/");

	eleventyConfig.ignores.add(".trash");
};
