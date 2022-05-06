const h1 = document.querySelector(".post__header");

const observer = new IntersectionObserver(([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1), {
	threshold: [1],
});

observer.observe(h1);
