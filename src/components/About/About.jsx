import { useTranslation } from "react-i18next";
import "./About.scss";

const About = () => {
	const { t } = useTranslation();

	return (
		<div className="about" id="about-us">
			<p className="about__title">{t("about_title")} Flovas</p>
		</div>
	);
};

export default About;
