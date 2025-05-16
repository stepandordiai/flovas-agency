import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import "./i18next";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
	const [vacanciesData, setVacanciesData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleVacanciesData = async () => {
		setIsLoading(true);
		try {
			const response = await axios(
				"https://flovas-crud.onrender.com/api/products"
			);

			setVacanciesData(response.data);
			setTimeout(() => {
				setIsLoading(false);
			}, 3000);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		handleVacanciesData();
	}, []);

	return (
		<Router>
			<Header vacanciesData={vacanciesData} />
			<Routes>
				<Route
					path="/"
					element={<Home vacanciesData={vacanciesData} isLoading={isLoading} />}
				/>
				<Route
					path="/vacancy-page"
					element={<VacancyPage vacanciesData={vacanciesData} />}
				/>
			</Routes>
			<div className="empty-div"></div>
			<Footer />
		</Router>
	);
}

export default App;
