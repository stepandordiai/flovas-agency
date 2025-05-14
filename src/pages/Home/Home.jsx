import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Vacancies from "../../components/Vacancies/Vacancies";
import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import "./Home.scss";

const Home = () => {
	const { t, i18n } = useTranslation();
	const [text, setText] = useState(t("home.title1"));

	useEffect(() => {
		setText(t("home.title1"));
	}, [i18n.language]);

	const placesData = [
		t("place1"),
		t("place2"),
		t("place3"),
		t("place4"),
		t("place5"),
		t("place6"),
	];

	useEffect(() => {
		document.querySelectorAll(".blur-char").forEach((char, index) => {
			setTimeout(() => {
				char.classList.add("blur-char--active");
			}, index * 50);
		});
	}, [text]);

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
		}, 1000);

		document
			.querySelector(".home__contact-us-link")
			.addEventListener("click", () => {
				document
					.querySelector(".contact-us")
					.classList.add("contact-us--active");
				document
					.querySelector(".contact-us__curtain")
					.classList.add("contact-us__curtain--active");
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
							<p>
								{text.split("").map((char, index) => {
									return (
										<span key={index} className="blur-char">
											{char}
										</span>
									);
								})}
							</p>
							<div className="home__rotate-container">
								{placesData.map((place, index) => (
									<span key={index}>{place}</span>
								))}
							</div>
							<p>
								{t("home.title2")
									.split("")
									.map((char, index) => {
										return (
											<span key={index} className="blur-char">
												{char}
											</span>
										);
									})}
							</p>
						</div>
						<div className="home__link-container">
							<a className={"home__link"} href="#vacancies">
								{t("vacancies_title")}
							</a>
							<button className={"home__link home__contact-us-link"}>
								{t("contact_us_title")}
							</button>
						</div>
					</div>
					<Vacancies />
					<About />
					<Contacts />
				</div>
			</div>
			<ContactUs />
		</>
	);
};

export default Home;
