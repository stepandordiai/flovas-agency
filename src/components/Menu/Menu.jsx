import React from "react";
import "./Menu.scss";

const Menu = () => {
	return (
		<div className="menu">
			<div className="menu__inner">
				<div className="dot-link-container">
					<div className="dot dot--active"></div>
					<a className="menu__link" href="#home">
						Home
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#about-us">
						About us
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#jobs">
						Jobs
					</a>
				</div>
				<div className="dot-link-container">
					<div className="dot"></div>
					<a className="menu__link" href="#contacts">
						Contacts
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
