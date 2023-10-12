const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
	navList.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-bar a");

navLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();

		const target = document.querySelector(link.getAttribute("href"));
		target.scrollIntoView({ behavior: "smooth" });
		navList.classList.remove("show");
	});
});

var typingEffect = new Typed(".multiText", {
	strings: ["coder", "programmer", "developer"],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	backDelay: 1500,
});
