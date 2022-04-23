// get the sticky element
const stickyElm = document.querySelector(".post__header");

const observer = new IntersectionObserver(([e]) => e.target.classList.toggle("is-sticky", e.intersectionRatio < 1), {
	threshold: [1],
});

observer.observe(stickyElm);
