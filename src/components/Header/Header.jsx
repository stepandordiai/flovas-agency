import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import LngSelect from "../LngSelect/LngSelect";
import MenuBtn from "../MenuBtn/MenuBtn";
import Menu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	const indicatorRef = useRef(null);
	const navRef = useRef(null);
	const [indicatorStyle, setIndicatorStyle] = useState({});

	const updateIndicator = () => {
		const activeLink = navRef.current.querySelector(".nav-link.active");
		if (activeLink && indicatorRef.current) {
			setIndicatorStyle({
				width: `${activeLink.offsetWidth}px`,
				left: `${activeLink.offsetLeft}px`,
			});
		}
	};

	function getRect() {
		const homeRect = document.querySelector(".homie").getBoundingClientRect();
		const jobsRect = document.querySelector(".jobs").getBoundingClientRect();
		const aboutUsRect = document
			.querySelector(".about")
			.getBoundingClientRect();
		const contactsRect = document
			.querySelector(".contacts")
			.getBoundingClientRect();
		const navLinks = document.querySelectorAll(".nav-link");

		navLinks.forEach((link) => link.classList.remove("active"));

		if (homeRect.top <= 80 && homeRect.bottom >= 85) {
			navLinks[0].classList.add("active");
		}
		if (jobsRect.top <= 80 && jobsRect.bottom >= 85) {
			navLinks[1].classList.add("active");
		}
		if (aboutUsRect.top <= 80 && aboutUsRect.bottom >= 85) {
			navLinks[2].classList.add("active");
		}
		if (contactsRect.top <= 80 && contactsRect.bottom >= 85) {
			navLinks[3].classList.add("active");
		}

		updateIndicator();
	}

	useEffect(() => {
		document.addEventListener("scroll", getRect);
		updateIndicator();

		return () => {
			removeEventListener("scroll", getRect);
		};
	}, []);

	return (
		<>
			<header className={"header"}>
				<div className="header-top">
					<MenuBtn />
					<a href={"#home"} className={"header__logo"}>
						Flovas <span>{t("logo_title")}</span>
					</a>
					<nav ref={navRef} className="header__nav">
						<a className={"nav-link active"} href={"#home"}>
							{t("home_title")}
						</a>
						<a className={"nav-link"} href={"#jobs"}>
							{t("jobs_title")}
						</a>
						<a className={"nav-link"} href={"#about-us"}>
							{t("about_title")} Flovas
						</a>
						<a className={"nav-link"} href={"#contacts"}>
							{t("contacts_title")}
						</a>
						<div
							className={"nav-link-indicator"}
							ref={indicatorRef}
							style={indicatorStyle}
						></div>
					</nav>
					<LngSelect />
				</div>
				<Menu />
			</header>
		</>
	);
};

export default Header;
