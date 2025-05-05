import { NavLink } from "react-router-dom";
import pinIcon from "/icons/pin.png";
import jobImg from "/job-img/6.jpg";
import "./JobCard.scss";

const JobCard = ({ job }) => {
	return (
		<>
			<div className={"job-card"}>
				<img className={"job-card__img"} src={jobImg} alt="" loading="lazy" />
				<div className={"job-card__header"}>
					<p>
						<img width={20} src={pinIcon} alt="" />
						{job.place}
					</p>
					<p className={"job-card__date"}>
						Vloženo {job.createdAt.slice(0, 10)}
					</p>
				</div>
				<p className={"job-card__title"}>{job.title}</p>
				<p style={{ marginBottom: 10 }}>{job.info}</p>
				<div className="job-card__link-container">
					<NavLink className={"job-card__link"} to={"job-page"}>
						Další informace
					</NavLink>
					<NavLink className={"job-card__link"} to={"contact-us"}>
						Kontaktujte nás
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default JobCard;
