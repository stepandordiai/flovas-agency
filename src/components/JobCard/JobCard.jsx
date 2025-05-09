import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import pinIcon from "/icons/pin.png";
import jobImg from "/job-img/6.jpg";
import "./JobCard.scss";

const JobCard = ({ job }) => {
	const { t } = useTranslation();

	// useEffect(() => {
	// 	document.querySelectorAll(".job-card__contact-us-link").forEach((btn) => {
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
			<div className={"job-card"}>
				<img className={"job-card__img"} src={job.img} alt="" loading="lazy" />
				<div className={"job-card__header"}>
					<p>
						<img width={20} src={pinIcon} alt="" />
						{job.place}
					</p>
					<p className={"job-card__date"}>
						Vloženo 9/5/25
						{/* {job.createdAt.slice(0, 10)} */}
					</p>
				</div>
				<p className={"job-card__title"}>{job.title}</p>
				<p style={{ marginBottom: 10 }}>{job.details}</p>
				<div className="job-card__link-container">
					<NavLink className={"job-card__link"} to={"job-page"}>
						{t("more_info_btn")}
					</NavLink>
					<a className={"job-card__tel-link"} href="tel:+420777957290">
						{t("contact_us_title")}
					</a>
				</div>
			</div>
		</>
	);
};

export default JobCard;
