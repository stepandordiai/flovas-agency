import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import "./i18next";
import "./App.scss";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/vacancy-page" element={<VacancyPage />} />
			</Routes>
			<div className="empty-div"></div>
			<Footer />
		</Router>
	);
}

export default App;
