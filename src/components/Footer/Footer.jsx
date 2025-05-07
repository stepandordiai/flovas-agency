import instagramIcon from "/icons/instagram.png";
import tiktokIcon from "/icons/tiktok.png";
import facebookIcon from "/icons/facebook.png";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<p className="footer__logo">Flovas</p>
				<div className="footer__socials">
					<a href={""}>
						<img width={30} src={instagramIcon} alt="" />
					</a>
					<a href={""}>
						<img width={30} src={tiktokIcon} alt="" />
					</a>
					<a href={"https://www.facebook.com/profile.php?id=61565186673220"}>
						<img width={30} src={facebookIcon} alt="" />
					</a>
				</div>
			</div>
			<div className="footer__nav-container">
				<div className="footer__nav-list">
					<p className="footer__nav-list-title">Navigation</p>
					<a href="#home">Uvod</a>
					<a href="#about-us">O nas</a>
					<a href="#jobs">Kariera</a>
					<a href="#contacts">Contacts</a>
				</div>
				<div className="footer__nav-list">
					<p className="footer__nav-list-title">Kontakty</p>
					<a href="tel:+420777957290">+420 777 957 290</a>
					<a href="mailto:work1agency@seznam.cz">work1agency@seznam.cz</a>
				</div>
				<div className="footer__nav-list">
					<p className="footer__nav-list-title">Follow us</p>
					<a href="">Instagram</a>
					<a href="">TokTok</a>
					<a
						href="https://www.facebook.com/profile.php?id=61565186673220"
						target="_blank"
					>
						Facebook
					</a>
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
						<p>
							Site by <a href="https://heeeyooo.studio/">heeeyooo.studio</a>
						</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "2" }}>
						<p>All rights reserved</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "3" }}>
						<p>
							Site by <a href="https://heeeyooo.studio/">heeeyooo.studio</a>
						</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "4" }}>
						<p>All rights reserved</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "5" }}>
						<p>
							Site by <a href="https://heeeyooo.studio/">heeeyooo.studio</a>
						</p>
					</div>
					<div className="footer-bottom__item" style={{ "--position": "6" }}>
						<p>All rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
