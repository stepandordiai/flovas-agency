import React, { useState, useEffect } from "react";
// import axios from "axios";
import JobCard from "../../components/JobCard/JobCard";
import data from "./../../data/jobs.json";
import "./Jobs.scss";

const Jobs = () => {
	// console.log(data);
	// const [loading, setLoading] = useState(true);

	// const [data, setData] = useState([]);

	// const getJobs = async () => {
	// 	try {
	// 		const response = await axios(
	// 			"https://flovas-crud.onrender.com/api/products"
	// 		);
	// 		setData(response.data);
	// 		setTimeout(() => {
	// 			setLoading(false);
	// 		}, 2000);
	// 	} catch (error) {
	// 		console.log(error);
	// 		setLoading(false);
	// 	}
	// };

	useEffect(() => {
		// getJobs();
	}, []);

	return (
		<div className="jobs" id="jobs">
			<h2 className="jobs__title">Вакансії</h2>
			{/* {loading === true ? (
				<div className="loading">
					<div></div>
				</div>
			) : ( */}
			<div className={"jobs-container"}>
				{data.map((job, index) => {
					return <JobCard key={index} job={job} />;
				})}
			</div>
			{/* )} */}
		</div>
	);
};

export default Jobs;
