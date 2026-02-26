module.exports = function (eleventyConfig) {
	const slugify = function (str = "") {
		return String(str)
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, "")
			.replace(/\s+/g, "-");
	};

	const toDate = function (value) {
		if (!value) return null;

		if (value instanceof Date) {
			return Number.isNaN(value.getTime()) ? null : value;
		}

		if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
			const parsed = new Date(`${value}T00:00:00Z`);
			return Number.isNaN(parsed.getTime()) ? null : parsed;
		}

		const parsed = new Date(value);
		return Number.isNaN(parsed.getTime()) ? null : parsed;
	};

	const getNoteDate = function (itemOrDate) {
		if (itemOrDate && itemOrDate.data) {
			return toDate(itemOrDate.data.created) || toDate(itemOrDate.date);
		}

		return toDate(itemOrDate);
	};

	const getNoteTimestamp = function (item) {
		const date = getNoteDate(item);
		return date ? date.getTime() : 0;
	};

	const getPublishedNotes = function (collectionApi) {
		return collectionApi
			.getFilteredByTag("note")
			.filter((item) => !item.data.draft)
			.sort((a, b) => getNoteTimestamp(b) - getNoteTimestamp(a));
	};

	// Passthrough copy
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addPassthroughCopy("CNAME");

	// Date formatting filters
	eleventyConfig.addFilter("dateFormat", function (date) {
		const parsed = getNoteDate(date);
		if (!parsed) return "";

		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC",
		}).format(parsed);
	});

	eleventyConfig.addFilter("isoDate", function (date) {
		const parsed = getNoteDate(date);
		if (!parsed) return "";

		const year = parsed.getUTCFullYear();
		const month = String(parsed.getUTCMonth() + 1).padStart(2, "0");
		const day = String(parsed.getUTCDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	});

	// Slugify filter
	eleventyConfig.addFilter("slugify", slugify);

	// Shortcodes
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// Collections
	eleventyConfig.addCollection("notes", function (collectionApi) {
		return getPublishedNotes(collectionApi);
	});

	eleventyConfig.addCollection("allNotes", function (collectionApi) {
		// Backwards-compatible alias for published notes.
		return getPublishedNotes(collectionApi);
	});

	eleventyConfig.addCollection("noteCategories", function (collectionApi) {
		const categories = new Set();
		getPublishedNotes(collectionApi).forEach((item) => {
			(item.data.categories || []).forEach((cat) => categories.add(cat));
		});
		return [...categories]
			.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }))
			.map((name) => ({
				name,
				slug: slugify(name),
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
