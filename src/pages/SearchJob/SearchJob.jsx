import styles from "./SearchJob.module.scss";
import { useLocation } from "react-router-dom";

const SearchJob = () => {
	const { state } = useLocation();

	const { what, where } = state || {};

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form action="" className={styles["search-input-container"]}>
				<div className={styles["input-container"]}>
					<label htmlFor="what">Co</label>
					<input
						onChange={(e) => setWhat(e.target.value)}
						id="what"
						type="text"
						value={what}
						placeholder="Elektrik"
					/>
				</div>
				<div className={styles["input-container"]}>
					<label htmlFor="where">Kde</label>
					<input
						onChange={(e) => setWhere(e.target.value)}
						id="where"
						type="text"
						value={where}
						placeholder="Kolin"
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
		</>
	);
};

export default SearchJob;
