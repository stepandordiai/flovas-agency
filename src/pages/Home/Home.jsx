import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import data from "./../../data/jobs.json";
import axios from "axios";
import pinIcon from "/icons/pin.png";
import jobImg from "/job-img/6.jpg";
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
								return (
									<React.Fragment key={index}>
										<div className={"job-container"}>
											<img
												className={"job-container__img"}
												src={jobImg}
												alt=""
											/>
											<div className={"job-container__header"}>
												<p>
													<img width={20} src={pinIcon} alt="" />
													{job.place}
												</p>
												<p className={"job-container__date"}>
													Vloženo {job.createdAt.slice(0, 10)}
												</p>
											</div>
											<p className={"job-container__title"}>{job.title}</p>
											<p>{job.info}</p>
										</div>
									</React.Fragment>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
