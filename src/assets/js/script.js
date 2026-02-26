const header = document.querySelector(".post__header");

if (header) {
	const observer = new IntersectionObserver(([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1), {
		threshold: [1],
	});

	observer.observe(header);
}

// Theme selector
(function () {
	const buttons = Array.from(document.querySelectorAll(".theme-button"));
	if (!buttons.length) return;
	const validThemes = new Set(["light", "dark", "auto"]);

	function current() {
		const theme = document.documentElement.getAttribute("data-theme") || "auto";
		return validThemes.has(theme) ? theme : "auto";
	}

	function update(theme) {
		document.documentElement.setAttribute("data-theme", theme);
		buttons.forEach((button) => {
			const isActive = button.dataset.themeOption === theme;
			button.setAttribute("aria-pressed", String(isActive));
		});
	}

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const theme = button.dataset.themeOption;
			if (!validThemes.has(theme)) return;
			localStorage.setItem("theme", theme);
			update(theme);
		});
	});

	update(current());
})();
