import { useTranslation } from "react-i18next";
import instagramIcon from "/icons/instagram.png";
import tiktokIcon from "/icons/tiktok.png";
import facebookIcon from "/icons/facebook.png";
import "./ContactUs.scss";

const ContactUs = () => {
	const { t } = useTranslation();

	function removeContactUs() {
		document
			.querySelector(".contact-us")
			.classList.remove("contact-us--active");
		document
			.querySelector(".contact-us__curtain")
			.classList.remove("contact-us__curtain--active");
	}

	const instagramUrl =
		"https://www.instagram.com/robota1cz/?igsh=MTNmaTU0YWRlenRxag%3D%3D&utm_source=qr#";
	const tiktokUrl = "https://www.tiktok.com/@robota1cz?_t=ZN-8wDLULhhMGc&_r=1";
	const facebookUrl =
		"https://www.facebook.com/profile.php?id=61565186673220&mibextid=wwXIfr&rdid=UJ6NQQAM9hT0QXnU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12Gr47Fn97X%2F%3Fmibextid%3DwwXIfr#";

	return (
		<>
			<div className={"contact-us"}>
				<div className={"contact-us__header"}>
					<p className={"contact-us__title"}>{t("contact_us_title")}</p>
					<button onClick={removeContactUs}>{t("close")}</button>
				</div>
				<div className="contact-us__inner">
					<div className="contact-us__info">
						<p className="contact-us__info-title">{t("contact_info")}</p>
						<div>
							<p>{t("tel")}</p>
							<a href="tel:+420777957290">+420 777 957 290</a>
							<p>E-mail</p>
							<a href="mailto:work1agency@seznam.cz">work1agency@seznam.cz</a>
							<p>{t("address")}</p>
							<a href="https://maps.app.goo.gl/g5t8zBqjSifGmSWR9">
								Pod Hroby 271 Kolín IV
							</a>
						</div>
					</div>
					<div className="contact-us__socials">
						<p className="contact-us__socials-title">
							{t("contact_us.follow_us")}
						</p>
						<div>
							<a href={instagramUrl} title="Instagram" target="_blank">
								<img width={30} src={instagramIcon} alt="" />
							</a>
							<a href={tiktokUrl} title="TikTok" target="_blank">
								<img width={30} src={tiktokIcon} alt="" />
							</a>
							<a href={facebookUrl} title="Facebook" target="_blank">
								<img width={30} src={facebookIcon} alt="" />
							</a>
						</div>
					</div>
					<div>
						<p className="contact-us__map-title">{t("map_title")}</p>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2396.4306065654405!2d15.214412699999997!3d50.0242313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c153bf1fd2a9d%3A0xd6870708de146d86!2sPod%20Hroby%20271%2C%20280%2002%20Kol%C3%ADn%20IV!5e1!3m2!1sen!2scz!4v1747227621758!5m2!1sen!2scz"
							width={"100%"}
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>
			<div className="contact-us__curtain"></div>
		</>
	);
};

export default ContactUs;
