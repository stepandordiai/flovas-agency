import { useTranslation } from "react-i18next";
import "./MenuBtn.scss";

const MenuBtn = () => {
	const { t } = useTranslation();

	function toggleMenuBtn() {
		document
			.querySelector(".menu-btn__dot")
			.classList.toggle("menu-btn__dot--active");
		document.querySelector(".menu").classList.toggle("menu--active");
	}
	return (
		<button onClick={toggleMenuBtn} className="menu-btn">
			<div className="menu-btn__title">{t("menu")}</div>
			<div className="menu-btn__dot"></div>
		</button>
	);
};

export default MenuBtn;
