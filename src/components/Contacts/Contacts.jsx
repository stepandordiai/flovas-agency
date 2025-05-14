import { useTranslation } from "react-i18next";
import "./Contacts.scss";

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<div className="contacts" id="contacts">
			<p className="contacts__title">{t("contacts_title")}</p>
		</div>
	);
};

export default Contacts;
