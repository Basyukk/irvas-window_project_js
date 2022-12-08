const images = () => {
	const imgPopup = document.createElement("div"),
		workSection = document.querySelector(".works"),
		bigImage = document.createElement("img");

	imgPopup.classList.add("popup");
	workSection.appendChild(imgPopup);

	imgPopup.style.display = "none";
	imgPopup.style.justifyContent = "center";
	imgPopup.style.alignItems = "center";

	imgPopup.appendChild(bigImage);

	workSection.addEventListener("click", (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains("preview")) {
			imgPopup.style.display = "flex";

			const path = target.parentNode.getAttribute("href");
			bigImage.setAttribute("src", path);
			bigImage.style.maxWidth = "100%";
			document.body.style.overflow = "hidden";
		}
		if (target && target.matches("div.popup")) {
			imgPopup.style.display = "none";
		}
	});
};
export default images;

// const images = () => {
// 	const imgPopup = document.createElement("div"),
// 		workSection = document.querySelector(".works"),
// 		bigImage = document.createElement("img");

// 	imgPopup.classList.add("popup");
// 	workSection.appendChild(imgPopup);

// 	imgPopup.style.justifyContent = "center";
// 	imgPopup.style.alignItems = "center";
// 	imgPopup.style.display = "none";

// 	imgPopup.appendChild(bigImage);

// 	workSection.addEventListener("click", (e) => {
// 		e.preventDefault();

// 		let target = e.target;

// 		if (target && target.classList.contains("preview")) {
// 			imgPopup.style.display = "flex";
// 			const path = target.parentNode.getAttribute("href");
// 			bigImage.setAttribute("src", path);
// 		}

// 		if (target && target.matches("div.popup")) {
// 			imgPopup.style.display = "none";
// 		}
// 	});
// };

// export default images;