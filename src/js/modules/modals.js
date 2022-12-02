const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		//отвечает за привязку окна к определённому тригеру
		const trigger = document.querySelectorAll(triggerSelector), //потому что тригерры-ссылки разные, чтобы не вызывать функцию отдельно
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach((item) => {
			item.addEventListener("click", (e) => {
				if (e.target) {
					e.preventDefault(); //потому что инициаторами модалки могут быть ссылки, которые перезагружают страницу
				}
				modal.style.display = "block";
				document.body.style.overflow = "hidden"; //чтобы сайт не скролился при открытой модалке
			});
		});

		close.addEventListener("click", () => {
			//закрываем крестиком
			modal.style.display = "none";
			document.body.style.overflow = "";
		});

		modal.addEventListener("click", (e) => {
			//закрываем модалку нажатием на область куда модалка не входит
			if (e.target === modal) {
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
	showModalByTime(".popup", 60000);
};
export default modals;
