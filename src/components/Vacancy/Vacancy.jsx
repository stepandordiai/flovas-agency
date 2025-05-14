import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Vacancy.scss";

const Vacancy = ({ vacancy }) => {
	const { t } = useTranslation();

	const { img, place, title } = vacancy;

	const date = new Date();
	const dateNow = date.getDate();
	const monthNow = date.getMonth();
	const yearNow = date.getFullYear();

	return (
		<div className={"vacancy"}>
			{/* All images r compressed */}
			{img ? (
				<img src={img} alt={title} loading="lazy" />
			) : (
				<div className="vacancy__no-img"></div>
			)}
			<div className="vacancy__details">
				<p className={"vacancy__date"}>
					Опубліковано: {dateNow + "/" + (monthNow + 1) + "/" + yearNow}
				</p>
				<p>
					<span style={{ fontWeight: 500 }}>Місто</span>: {place}
				</p>
				<p className={"vacancy__title"}>{title}</p>
			</div>
			<div className="vacancy__link-container">
				<NavLink className={"vacancy__link"} to={"/vacancy-page"}>
					{t("more_info_btn")}
				</NavLink>
				<a className={"vacancy__link"} href="tel:+420777957290">
					{t("contact_us_title")}
				</a>
			</div>
		</div>
	);
};

export default Vacancy;
