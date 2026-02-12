module.exports = function (eleventyConfig) {
	// Passthrough copy
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("CNAME");

	// Limit filter (for showing only N items from a collection)
	eleventyConfig.addFilter("limit", function (arr, limit) {
		return arr.slice(0, limit);
	});

	// Date formatting filters
	eleventyConfig.addFilter("dateFormat", function (date) {
		return new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	});

	eleventyConfig.addFilter("isoDate", function (date) {
		return new Date(date).toISOString().split("T")[0];
	});

	// Slugify filter
	eleventyConfig.addFilter("slugify", function (str) {
		return str
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-");
	});

	// Collections
	eleventyConfig.addCollection("notes", function (collectionApi) {
		return collectionApi
			.getFilteredByTag("note")
			.filter((item) => !item.data.draft);
	});

	eleventyConfig.addCollection("allNotes", function (collectionApi) {
		return collectionApi.getFilteredByTag("note");
	});

	eleventyConfig.addCollection("noteCategories", function (collectionApi) {
		const categories = new Set();
		collectionApi.getFilteredByTag("note").forEach((item) => {
			(item.data.categories || []).forEach((cat) => categories.add(cat));
		});
		return [...categories].sort().map((name) => ({
			name,
			slug: name
				.toLowerCase()
				.replace(/[^\w\s-]/g, "")
				.replace(/\s+/g, "-"),
		}));
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
