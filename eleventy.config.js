module.exports = async function (eleventyConfig) {


	eleventyConfig.addGlobalData("layout", "top-bottom.html");
	eleventyConfig.addPassthroughCopy("assets/metacontent");
	eleventyConfig.addPassthroughCopy("assets/extra/");
	eleventyConfig.addPassthroughCopy("assets/js/");

	eleventyConfig.ignores.add(".trash");
	
	const { HtmlBasePlugin } = await import("@11ty/eleventy");
	eleventyConfig.addPlugin(HtmlBasePlugin);

};

