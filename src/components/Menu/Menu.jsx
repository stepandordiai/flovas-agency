import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./Menu.scss";

const Menu = () => {
	const { t } = useTranslation();

	useEffect(() => {
		document.querySelectorAll(".menu__link").forEach((link) => {
			link.addEventListener("click", () => {
				document
					.querySelector(".menu-btn__dot")
					.classList.remove("menu-btn__dot--active");
				document.querySelector(".menu").classList.remove("menu--active");
			});
		});

		document.addEventListener("scroll", () => {
			document
				.querySelector(".menu-btn__dot")
				.classList.remove("menu-btn__dot--active");
			document.querySelector(".menu").classList.remove("menu--active");
		});
	}, []);

	return (
		<div className="menu">
			<div className="menu__inner">
				<div className="dot-link-container">
					<div className="dot dot--active"></div>
					<a className="menu__link" href="#home">
						{t("home_title")}
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#jobs">
						{t("jobs_title")}
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#about-us">
						{t("about_title")} Flovas
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#contacts">
						{t("contacts_title")}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
