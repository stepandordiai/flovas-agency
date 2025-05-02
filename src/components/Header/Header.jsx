import { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import LngSelect from "../LngSelect/LngSelect";

const Header = () => {
	const indicatorRef = useRef(null);
	const navRef = useRef(null);
	const location = useLocation();
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

	useEffect(() => {
		updateIndicator();
		window.addEventListener("resize", updateIndicator); // Recalculate on resize
		// TODO:
		return () => {
			window.removeEventListener("resize", updateIndicator);
		};
	}, [location.pathname]); // Re-run on path change

	return (
		<>
			<header className={"header"}>
				<NavLink to={"/"} className={"header__logo"}>
					Flovas <span>agentura</span>
				</NavLink>
				<nav ref={navRef} className="header__nav">
					<NavLink className={"nav-link"} to={"/"}>
						Uvod
					</NavLink>
					<NavLink className={"nav-link"} to={"/about-us"}>
						O nas
					</NavLink>
					<NavLink className={"nav-link"} to={"/carrier"}>
						Kariera
					</NavLink>
					<NavLink className={"nav-link"} to={"/contacts"}>
						Kontakty
					</NavLink>
					<div
						className={"nav-link-indicator"}
						ref={indicatorRef}
						style={indicatorStyle}
					></div>
				</nav>
				<LngSelect />
			</header>
		</>
	);
};

export default Header;
