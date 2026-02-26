const header = document.querySelector(".post__header");

if (header) {
	const observer = new IntersectionObserver(([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1), {
		threshold: [1],
	});

	observer.observe(header);
}

// Theme toggle
(function () {
	const toggle = document.querySelector(".theme-toggle");
	if (!toggle) return;

	const cycle = { auto: "light", light: "dark", dark: "auto" };
	const icons = { auto: "\u25D1", light: "\u2600", dark: "\u263E" };

	function current() {
		return document.documentElement.getAttribute("data-theme") || "auto";
	}

	function update(theme) {
		document.documentElement.setAttribute("data-theme", theme);
		toggle.textContent = icons[theme];
		toggle.setAttribute("aria-label", "Theme: " + theme);
	}

	toggle.addEventListener("click", function () {
		var next = cycle[current()];
		localStorage.setItem("theme", next);
		update(next);
	});

	update(current());
})();
