import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Vacancy.scss";

const Vacancy = ({ vacancy }) => {
	const { t } = useTranslation();

	const { img, place, title, updatedAt } = vacancy;

	return (
		<div className={"vacancy"}>
			{img ? (
				<img src={img} alt={title} loading="lazy" />
			) : (
				<div className="vacancy__no-img"></div>
			)}
			<div className="vacancy__details">
				<p className={"vacancy__date"}>
					Опубліковано: {updatedAt.slice(0, 10)}
				</p>
				<p>
					<span style={{ fontWeight: 500 }}>Місто</span>: {place}
				</p>
				<p className={"vacancy__title"}>{title}</p>
			</div>
			<div className="vacancy__link-container">
				<NavLink
					className={"vacancy__link"}
					to={"/vacancy-page"}
					style={{ pointerEvents: "none" }}
				>
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
