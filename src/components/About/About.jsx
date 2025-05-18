import { useTranslation } from "react-i18next";
import "./About.scss";

const About = () => {
	const { t } = useTranslation();

	return (
		<div className="about" id="about">
			<h2 className="about__title">{t("about_title")} Flovas</h2>
			<ul className="about__list">
				<li>Працевлаштування по всій Чехії</li>
				<li>Для чоловіків жінок та сімейних пар</li>
				<li>Аванси кожного тижня</li>
				<li>Надаємо житло</li>
				<li>Офіційне працевлаштування</li>
				<li>Візова підтримка</li>
				<li>Оплата соціалки та страховки</li>
			</ul>
		</div>
	);
};

export default About;
