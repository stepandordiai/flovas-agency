import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../../components/JobCard/JobCard";
import "./Home.scss";

const Home = () => {
	const placesData = ["Prague", "Kolin", "Brno", "Ostrava", "Pardubice"];

	const [loading, setLoading] = useState(true);

	const [data, setData] = useState([]);

	const getJobs = async () => {
		try {
			const response = await axios(
				"https://flovas-crud.onrender.com/api/products"
			);
			setData(response.data);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getJobs();
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
		document
			.querySelector(".home__rotate-container span")
			.setAttribute("data-show", "");
		setInterval(rotateWord, 3000);
	}, []);

	return (
		<>
			<div className={"home"}>
				<div className={"home-inner"}>
					<div className={"title-container"}>
						<div className={"home__title"}>
							Hledat práci v
							<div className="home__rotate-container">
								{placesData.map((place, index) => (
									<span key={index}>{place}</span>
								))}
							</div>
							s <span style={{ fontWeight: 600 }}>Flovas</span>{" "}
							<span style={{ fontWeight: 200 }}>agentura</span>
						</div>
					</div>
					{loading === true ? (
						<div className="loading">
							<div></div>
						</div>
					) : (
						<div className={"jobs-container"}>
							{data.map((job, index) => {
								return <JobCard key={index} job={job} />;
							})}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
