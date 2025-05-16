import { useTranslation } from "react-i18next";
import Vacancy from "../Vacancy/Vacancy";
import "./Vacancies.scss";

const Vacancies = ({ vacanciesData, isLoading }) => {
	const { t } = useTranslation();

	return (
		<div className="vacancies" id="vacancies">
			<h2 className="vacancies__title">{t("vacancies_title")}</h2>
			{isLoading ? (
				<div className="vacancies-loading">
					<div className="vacancies-loading__circle">
						<span></span>
					</div>
					<span>Вакансії завантажуються</span>
				</div>
			) : (
				<div className={"vacancies-container"}>
					{vacanciesData.reverse().map((vacancy, index) => {
						return <Vacancy key={index} vacancy={vacancy} />;
					})}
				</div>
			)}
		</div>
	);
};

export default Vacancies;
