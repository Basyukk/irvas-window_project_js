import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";

window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	let modalState = {};
	let deadline = "2023-01-01";
	changeModalState(modalState);
	timer(".container1", deadline);
	modals();
	tabs();
	forms(modalState);
}); //глобальный обработчик события
