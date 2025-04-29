import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchJob from "./pages/SearchJob/SearchJob";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/search-job" element={<SearchJob />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
