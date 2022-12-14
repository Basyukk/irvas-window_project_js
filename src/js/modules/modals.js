const modals = () => {
	function bindModal(
		triggerSelector,
		modalSelector,
		closeSelector,
		closeClickOverlay = true
	) {
		//отвечает за привязку окна к определённому тригеру
		const trigger = document.querySelectorAll(triggerSelector), //потому что тригерры-ссылки разные, чтобы не вызывать функцию отдельно
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll("[data-modal]");

		trigger.forEach((item) => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault(); //потому что инициаторами модалки могут быть ссылки, которые перезагружают страницу
				}

				windows.forEach((item) => {
					item.style.display = "none";
				});
				modal.style.display = "block";
				document.body.style.overflow = "hidden"; //чтобы сайт не скролился при открытой модалке
			});
		});

		close.addEventListener("click", () => {
			windows.forEach((item) => {
				item.style.display = "none";
			});
			//закрываем крестиком
			modal.style.display = "none";
			document.body.style.overflow = "";
		});

		modal.addEventListener("click", (e) => {
			//закрываем модалку нажатием на область куда модалка не входит
			if (e.target === modal && closeClickOverlay) {
				windows.forEach((item) => {
					item.style.display = "none";
				});
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = "block";
			document.body.style.overflow = "hidden";
		}, time);
	}
	bindModal(
		".popup_engineer_btn",
		".popup_engineer",
		".popup_engineer .popup_close"
	);
	bindModal(".phone_link", ".popup", ".popup .popup_close");
	bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
	bindModal(
		".popup_calc_button",
		".popup_calc_profile",
		".popup_calc_profile_close",
		false
	);
	bindModal(
		".popup_calc_profile_button",
		".popup_calc_end",
		".popup_calc_end_close",
		false
	);

	showModalByTime(".popup", 60000);
};
export default modals;
