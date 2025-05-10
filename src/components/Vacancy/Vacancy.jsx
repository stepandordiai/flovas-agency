import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Vacancy.scss";

const Vacancy = ({ vacancy }) => {
	const { t } = useTranslation();

	const { img, place, title } = vacancy;

	// useEffect(() => {
	// 	document.querySelectorAll(".vacancy__contact-us-link").forEach((btn) => {
	// 		btn.addEventListener("click", () => {
	// 			document
	// 				.querySelector(".contact-us")
	// 				.classList.add("contact-us--active");
	// 			document
	// 				.querySelector(".bg-curtain")
	// 				.classList.add("bg-curtain--active");
	// 		});
	// 	});
	// }, []);
	return (
		<>
			<div className={"vacancy"}>
				{/* All images are compressed */}
				<img className={"vacancy__img"} src={img} alt="" loading="lazy" />
				<div className={"vacancy__header"}>
					<p>Місто: {place}</p>
					<p className={"vacancy__date"}>
						Опубліковано: 10/05/2025
						{/* {job.createdAt.slice(0, 10)} */}
					</p>
				</div>
				<p className={"vacancy__title"}>{title}</p>
				<div className="vacancy__link-container">
					<NavLink className={"vacancy__link"} to={"job-page"}>
						{t("more_info_btn")}
					</NavLink>
					<a className={"vacancy__tel-link"} href="tel:+420777957290">
						{t("contact_us_title")}
					</a>
				</div>
			</div>
		</>
	);
};

export default Vacancy;
