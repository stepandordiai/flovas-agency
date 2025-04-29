import { useEffect } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
	useEffect(() => {
		let prevScroll = 0;

		function handleScrollHeader() {
			let currentScroll = window.pageYOffset;

			if (currentScroll > prevScroll) {
				document
					.querySelector(`.${styles["header"]}`)
					.classList.add(`${styles["header--hide"]}`);
				document
					.querySelector(`.${styles["header__bottom-logo"]}`)
					.classList.add(`${styles["header__bottom-logo--active"]}`);
			} else {
				document
					.querySelector(`.${styles["header"]}`)
					.classList.remove(`${styles["header--hide"]}`);
				document
					.querySelector(`.${styles["header__bottom-logo"]}`)
					.classList.remove(`${styles["header__bottom-logo--active"]}`);
			}
			prevScroll = currentScroll;
		}
		document.addEventListener("scroll", () => {
			handleScrollHeader();
		});
	}, []);

	return (
		<>
			<header className={styles["header"]}>
				<div className={styles["header__top"]}>
					<div>Search</div>
					<NavLink to={"/"} className={styles["header__logo"]}>
						Flovas <span>agentura</span>
					</NavLink>
					<div>Cestina</div>
				</div>
				<div className={styles["header__bottom"]}>
					<div className={styles["header__bottom-logo"]}>Flovas</div>
					<nav className={styles["header__nav"]}>
						<NavLink className={styles["header__nav-link"]} to={"/"}>
							Uvod
						</NavLink>
						<NavLink className={styles["header__nav-link"]} to={"/about-us"}>
							O nas
						</NavLink>
						<NavLink className={styles["header__nav-link"]} to={"/carrier"}>
							Kariera
						</NavLink>
						<NavLink className={styles["header__nav-link"]} to={"/contacts"}>
							Kontakty
						</NavLink>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
