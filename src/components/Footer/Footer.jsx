import instagramIcon from "/icons/instagram.png";
import tiktokIcon from "/icons/tiktok.png";
import facebookIcon from "/icons/facebook.png";
import "./Footer.scss";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div>
					<p className="footer__logo">Flovas</p>
					<div>
						<a href={""}>
							<img width={30} src={instagramIcon} alt="" />
						</a>
						<a href={""}>
							<img width={30} src={tiktokIcon} alt="" />
						</a>
						<a href={""}>
							<img width={30} src={facebookIcon} alt="" />
						</a>
					</div>
				</div>
				<div>
					<div className="footer__nav-list">
						<a href="">Uvod</a>
						<a href="">O nas</a>
						<a href="">Kariera</a>
						<a href="">Contacts</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
