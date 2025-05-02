import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchJob from "./pages/SearchJob/SearchJob";
import Header from "./components/Header/Header";
import "./i18next";
import Contacts from "./pages/Contacts/Contacts";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/search-job" element={<SearchJob />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
