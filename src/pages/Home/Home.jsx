import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ContactUs from "../../components/ContactUs/ContactUs";
import Jobs from "../../components/Jobs/Jobs";
import "./Home.scss";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";

const Home = () => {
	const placesData = [
		"Prague",
		"Kolin",
		"Brno",
		"Ostrava",
		"Pardubice",
		"Cheb",
	];

	useEffect(() => {
		document.querySelectorAll(".blur-char").forEach((char, index) => {
			setTimeout(() => {
				char.classList.add("blur-char--active");
			}, index * 50);
		});
	}, []);

	function rotateWord() {
		const dataShow = document.querySelector(
			".home__rotate-container span[data-show]"
		);
		const dataNext =
			dataShow.nextElementSibling ||
			document.querySelector(".home__rotate-container span:first-child");
		const dataUp = document.querySelector(
			".home__rotate-container span[data-up]"
		);

		if (dataUp) {
			dataUp.removeAttribute("data-up");
		}

		dataShow.removeAttribute("data-show");
		dataShow.setAttribute("data-up", "");
		dataNext.setAttribute("data-show", "");
	}

	useEffect(() => {
		let customInterval;
		setTimeout(() => {
			document
				.querySelector(".home__rotate-container span")
				.setAttribute("data-show", "");
			customInterval = setInterval(rotateWord, 3000);
		}, 2000);

		document
			.querySelector(".home__contact-us-link")
			.addEventListener("click", () => {
				document
					.querySelector(".contact-us")
					.classList.add("contact-us--active");
				document
					.querySelector(".bg-curtain")
					.classList.add("bg-curtain--active");
			});

		return () => {
			clearInterval(customInterval);
		};
	}, []);

	return (
		<>
			<div className={"home"} id="home">
				<div className={"home-inner"}>
					<div className={"homie title-container"}>
						<div className={"home__title"}>
							{"Hledat práci v".split("").map((char, index) => {
								return (
									<React.Fragment key={index}>
										<span className="blur-char">{char}</span>
									</React.Fragment>
								);
							})}
							<div className="home__rotate-container">
								{placesData.map((place, index) => (
									<span key={index}>{place}</span>
								))}
							</div>
							<span className="blur-char">s</span>{" "}
							<span style={{ fontWeight: 600 }}>
								{"Flovas".split("").map((char, index) => {
									return (
										<React.Fragment key={index}>
											<span className="blur-char">{char}</span>
										</React.Fragment>
									);
								})}
							</span>{" "}
							<span style={{ fontWeight: 200 }}>
								{"agentura".split("").map((char, index) => {
									return (
										<React.Fragment key={index}>
											<span className="blur-char">{char}</span>
										</React.Fragment>
									);
								})}
							</span>
						</div>
						<div className="home__link-container">
							<a className={"home__link"} href="#jobs">
								Kariera
							</a>
							<button className={"home__link home__contact-us-link"}>
								Kontaktujte nás
							</button>
						</div>
					</div>
					<Jobs />
					<About />
					<Contacts />
				</div>
			</div>
			<ContactUs />
		</>
	);
};

export default Home;
