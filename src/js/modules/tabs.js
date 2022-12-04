const tabs = () => {
	function openTabs(headerSelector, tabSelector, contentSelector, activeClass) {
		const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector);

		function hideTabContent() {
			//скрываем весь контент
			content.forEach((item) => {
				item.style.display = "none";
			});
			tab.forEach((item) => {
				item.classList.remove(activeClass);
			});
		}
		function showTabContent(i = 0) {
			//показывае определенный контент
			content[i].style.display = "block";

			tab[i].classList.add(activeClass);
		}
		hideTabContent();
		showTabContent();

		header.addEventListener("click", (e) => {
			const target = e.target;

			if (
				target &&
				(target.classList.contains(tabSelector.replace(/\./, "")) ||
					target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
			) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent();

						showTabContent(i);
					}
				});
			}
		});
	}
	openTabs(
		".decoration_slider",
		".no_click",
		".decoration_content > div > div",
		"after_click"
	);
	openTabs(".glazing_slider ", ".glazing_block", ".glazing_content", "active");
};
export default tabs;
