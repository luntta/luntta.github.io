module.exports = function (eleventyConfig) {
	// Passthrough copy
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("CNAME");

	// Limit filter (for showing only N items from a collection)
	eleventyConfig.addFilter("limit", function (arr, limit) {
		return arr.slice(0, limit);
	});

	// Collections
	eleventyConfig.addCollection("projects", function (collectionApi) {
		return collectionApi.getFilteredByTag("project").sort((a, b) => {
			return (a.data.order || 999) - (b.data.order || 999);
		});
	});

	eleventyConfig.addCollection("featuredProjects", function (collectionApi) {
		return collectionApi
			.getFilteredByTag("project")
			.filter((item) => item.data.featured)
			.sort((a, b) => {
				return (a.data.order || 999) - (b.data.order || 999);
			});
	});

	eleventyConfig.addCollection("notes", function (collectionApi) {
		return collectionApi
			.getFilteredByTag("note")
			.filter((item) => !item.data.draft);
	});

	eleventyConfig.addCollection("allNotes", function (collectionApi) {
		return collectionApi.getFilteredByTag("note");
	});

	return {
		dir: {
			input: "src",
			output: "_site",
			includes: "_includes",
			data: "_data",
		},
	};
};
