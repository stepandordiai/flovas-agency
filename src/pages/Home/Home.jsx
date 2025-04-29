import styles from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "./../../data/jobs.json";

const Home = () => {
	const [what, setWhat] = useState("");
	const [where, setWhere] = useState("");

	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/search-job", { state: { what, where } });
	};

	const matchingJobs = data.filter(
		(job) =>
			job.title.toLowerCase().startsWith(what.toLowerCase()) &&
			job.place.toLowerCase().startsWith(where.toLowerCase())
	);

	return (
		<>
			<div className={styles["home"]}>
				<div className={styles["search-container"]}>
					<p className={styles["title"]}>
						Najít si lepší práci a pracovní prostor
					</p>
					<p
						className={styles["sec-title"]}
					>{`Founded jobd: ${matchingJobs.length}`}</p>
					<form action="" className={styles["search-input-container"]}>
						<div className={styles["input-container"]}>
							<label htmlFor="what">Co</label>
							<input
								onChange={(e) => setWhat(e.target.value)}
								id="what"
								type="text"
								placeholder={`Například \"elektrikář\"`}
							/>
						</div>
						<div className={styles["input-container"]}>
							<label htmlFor="where">Kde</label>
							<input
								onChange={(e) => setWhere(e.target.value)}
								id="where"
								type="text"
								placeholder={`Například \"Kolín\"`}
							/>
						</div>
						<button
							onClick={handleFormSubmit}
							type="submit"
							className={styles["search-btn"]}
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Home;
