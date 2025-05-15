import { useTranslation } from "react-i18next";
import Vacancy from "../Vacancy/Vacancy";
import "./Vacancies.scss";

const Vacancies = ({ vacanciesData }) => {
	const { t } = useTranslation();

	console.log(vacanciesData);

	return (
		<div className="vacancies" id="vacancies">
			<h2 className="vacancies__title">{t("vacancies_title")}</h2>
			<div className={"vacancies-container"}>
				{vacanciesData.map((vacancy, index) => {
					return <Vacancy key={index} vacancy={vacancy} />;
				})}
			</div>
		</div>
	);
};

export default Vacancies;
