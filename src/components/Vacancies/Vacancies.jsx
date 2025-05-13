import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import Vacancy from "../Vacancy/Vacancy";
import data from "../../data/jobs.json";
import "./Vacancies.scss";

const Jobs = () => {
	const { t } = useTranslation();

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
		<div className="vacancies" id="vacancies">
			<h2 className="vacancies__title">{t("vacancies_title")}</h2>
			{/* {loading === true ? (
				<div className="loading">
					<div></div>
				</div>
			) : ( */}
			<div className={"vacancies-container"}>
				{data.map((vacancy, index) => {
					return <Vacancy key={index} vacancy={vacancy} />;
				})}
			</div>
			{/* )} */}
		</div>
	);
};

export default Jobs;
