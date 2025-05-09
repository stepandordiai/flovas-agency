import React, { useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
	useEffect(() => {
		document.querySelectorAll(".menu__link").forEach((link) => {
			link.addEventListener("click", () => {
				// document
				// 	.querySelector(".home-inner")
				// 	.classList.remove("home-inner--active");
				document
					.querySelector(".menu-btn__dot")
					.classList.remove("menu-btn__dot--active");
				document.querySelector(".menu").classList.remove("menu--active");
			});
		});
	}, []);

	return (
		<div className="menu">
			<div className="menu__inner">
				<div className="dot-link-container">
					<div className="dot dot--active"></div>
					<a className="menu__link" href="#home">
						Головна
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#jobs">
						Вакансії
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#about-us">
						Про нас
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#contacts">
						Контакти
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
