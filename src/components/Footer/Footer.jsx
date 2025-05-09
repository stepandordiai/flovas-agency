import { useTranslation } from "react-i18next";
import instagramIcon from "/icons/instagram.png";
import tiktokIcon from "/icons/tiktok.png";
import facebookIcon from "/icons/facebook.png";
import "./Footer.scss";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div className="footer">
			<div className="footer-inner">
				<div className="footer-top">
					<p className="footer__logo">Flovas</p>
					<div className="footer__socials">
						<a style={{ pointerEvents: "none" }} href={""}>
							<img width={30} src={instagramIcon} alt="" />
						</a>
						<a style={{ pointerEvents: "none" }} href={""}>
							<img width={30} src={tiktokIcon} alt="" />
						</a>
						<a
							href={"https://www.facebook.com/profile.php?id=61565186673220"}
							target="_blank"
						>
							<img width={30} src={facebookIcon} alt="" />
						</a>
					</div>
				</div>
				<div className="footer__nav-container">
					<div className="footer__nav-list">
						<p className="footer__nav-list-title">{t("footer.nav")}</p>
						<a href="#home">{t("home_title")}</a>
						<a href="#jobs">{t("jobs_title")}</a>
						<a href="#about-us">{t("about_title")}</a>
						<a href="#contacts">{t("contacts_title")}</a>
					</div>
					<div className="footer__nav-list">
						<p className="footer__nav-list-title">{t("contact_us_title")}</p>
						<a href="tel:+420777957290">+420 777 957 290</a>
						<a href="mailto:work1agency@seznam.cz">work1agency@seznam.cz</a>
					</div>
					<div className="footer__nav-list">
						<p className="footer__nav-list-title">{t("footer.follow_us")}</p>
						<a style={{ pointerEvents: "none" }} href="">
							Instagram
						</a>
						<a style={{ pointerEvents: "none" }} href="">
							TikTok
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=61565186673220"
							target="_blank"
						>
							Facebook
						</a>
					</div>
				</div>
			</div>
			<div
				className="footer-bottom__slider"
				style={{
					"--width": "200px",
					"--quantity": "6",
				}}
			>
				<div className="footer-bottom__list">
					<div className="footer-bottom__item" style={{ "--position": "1" }}>
						<p>&copy; 2025 Flovas</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "2" }}>
						<p>Всі права захищені</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "3" }}>
						<p>
							Site by{" "}
							<a href="https://heeeyooo.studio/" target="_blank">
								heeeyooo.studio
							</a>
						</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "4" }}>
						<p>&copy; 2025 Flovas</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "5" }}>
						<p>Всі права захищені</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "6" }}>
						<p>
							Site by{" "}
							<a href="https://heeeyooo.studio/" target="_blank">
								heeeyooo.studio
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
