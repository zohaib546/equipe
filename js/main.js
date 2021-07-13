const menuLines = document.querySelectorAll(".line");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".navigation");
const label = document.querySelector(".label");

[menu, close].forEach((btn) =>
	btn.addEventListener("click", () => {
		nav.classList.toggle("-translate-y-full");
		nav.classList.toggle("translate-y-0");
		nav.classList.toggle("active");
		menu.classList.toggle("hidden");
		close.classList.toggle("hidden");

		label.textContent = label.textContent == "Menu" ? "Close" : "Menu";
	})
);
