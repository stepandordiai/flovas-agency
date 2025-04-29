import styles from "./SearchJob.module.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import data from "./../../data/jobs.json";
import React from "react";
import pinIcon from "/icons/pin.png";

const SearchJob = () => {
	const { state } = useLocation();

	const { what, where } = state;

	// const handleFormSubmit = (e) => {
	// 	e.preventDefault();
	// };

	const [whatSearchJob, setWhatSearchJob] = useState(what);
	const [whereSearchJob, setWhereSearchJob] = useState(where);

	return (
		<>
			<form action="" className={styles["search-input-container"]}>
				<div className={styles["input-container"]}>
					<label htmlFor="what">Co</label>
					<input
						onChange={(e) => setWhatSearchJob(e.target.value)}
						id="what"
						type="text"
						value={whatSearchJob}
						placeholder="Elektrik"
					/>
				</div>
				<div className={styles["input-container"]}>
					<label htmlFor="where">Kde</label>
					<input
						onChange={(e) => setWhereSearchJob(e.target.value)}
						id="where"
						type="text"
						value={whereSearchJob}
						placeholder="Kolin"
					/>
				</div>
				{/* <button
					onClick={handleFormSubmit}
					type="submit"
					className={styles["search-btn"]}
				>
					Search
				</button> */}
			</form>
			<div className={styles["jobs-container"]}>
				{data
					.filter((job) => {
						return whatSearchJob === "" && whereSearchJob === ""
							? job
							: job.title
									.toLowerCase()
									.startsWith(whatSearchJob.toLowerCase()) &&
									job.place
										.toLowerCase()
										.startsWith(whereSearchJob.toLowerCase());
					})
					.map((job, index) => {
						return (
							<React.Fragment key={index}>
								<div className={styles["job-container"]}>
									<div className={styles["job-container__header"]}>
										<p>
											<img width={20} src={pinIcon} alt="" />
											{job.place}
										</p>
										<p className={styles["job-container__date"]}>{job.date}</p>
									</div>
									<p className={styles["job-container__title"]}>{job.title}</p>
									<p>{job.details}</p>
								</div>
							</React.Fragment>
						);
					})}
			</div>
		</>
	);
};

export default SearchJob;
