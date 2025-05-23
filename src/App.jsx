import {
	BrowserRouter as Router,
	Routes,
	Route,
	ScrollRestoration,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import "./i18next";
import axios from "axios";
import { useEffect, useState } from "react";
import phoneIcon from "/icons/phone.png";
import whatsappIcon from "/icons/whatsapp.png";
import telegramIcon from "/icons/telegram.png";
import "./App.scss";
import ScrollToTop from "./utils/ScrollToTop";

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
			<ScrollToTop />
			<Header vacanciesData={vacanciesData} />
			<Routes>
				<Route
					path="/"
					element={<Home vacanciesData={vacanciesData} isLoading={isLoading} />}
				/>
				<Route
					path="/vacancy-page/:id"
					element={<VacancyPage vacanciesData={vacanciesData} />}
				/>
			</Routes>
			<div className="empty-div"></div>
			<Footer />
			<a className="fixed-contact-link" href="" target="_blank">
				<img width={50} height={50} src={telegramIcon} alt="Telegram" />
			</a>
			<a
				className="fixed-contact-link"
				href="https://wa.me/420777957290"
				target="_blank"
			>
				<img width={50} height={50} src={whatsappIcon} alt="WhatsApp" />
			</a>
			<a className="fixed-contact-link" href="tel:+420777957290">
				<img width={50} height={50} src={phoneIcon} alt="Phone" />
			</a>
		</Router>
	);
}

export default App;
