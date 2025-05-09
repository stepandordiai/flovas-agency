import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";
import MenuBtn from "../MenuBtn/MenuBtn";
import Menu from "../Menu/Menu";

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
			.querySelector(".about-us")
			.getBoundingClientRect();
		const contactsRect = document
			.querySelector(".contacts")
			.getBoundingClientRect();
		const navLinks = document.querySelectorAll(".nav-link");

		for (let i = 0; i < navLinks.length; i++) {
			navLinks[i].classList.remove("active");
		}
		if (homeRect.top <= 0 && homeRect.bottom >= 45) {
			navLinks[0].classList.add("active");
		}
		if (jobsRect.top <= 45 && jobsRect.bottom >= 45) {
			navLinks[1].classList.add("active");
		}
		if (aboutUsRect.top <= 45 && aboutUsRect.bottom >= 45) {
			navLinks[2].classList.add("active");
		}
		if (contactsRect.top <= 45 && contactsRect.bottom >= 45) {
			navLinks[3].classList.add("active");
		}

		updateIndicator();
	}

	useEffect(() => {
		document.addEventListener("scroll", () => {
			getRect();
		});
		updateIndicator();

		return () => {
			removeEventListener("scroll", getRect);
		};
	}, []); // Re-run on path change

	return (
		<>
			<header className={"header"}>
				<div className="header-top">
					<MenuBtn />
					<NavLink to={"/"} className={"header__logo"}>
						Flovas <span>{t("logo_title")}</span>
					</NavLink>
					<nav ref={navRef} className="header__nav">
						<a className={"nav-link active"} href={"#home"}>
							{t("home_title")}
						</a>
						<a className={"nav-link"} href={"#jobs"}>
							{t("jobs_title")}
						</a>
						<a className={"nav-link"} href={"#about-us"}>
							{t("about_title")}
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
