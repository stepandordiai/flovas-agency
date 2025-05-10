import instagramIcon from "/icons/instagram.png";
import tiktokIcon from "/icons/tiktok.png";
import facebookIcon from "/icons/facebook.png";
import "./ContactUs.scss";

const ContactUs = () => {
	function removeContactUs(e) {
		e.preventDefault();
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
					<p className={"contact-us__title"}>Зв'яжіться з нами</p>
					<button onClick={removeContactUs}>закрити</button>
				</div>
				<div className="contact-us__inner">
					<div className="contact-us__info">
						<p>Контактна інформація</p>
						<div>
							<a href="tel:+420777957290">+420 777 957 290</a>
							<a href="mailto:work1agency@seznam.cz">work1agency@seznam.cz</a>
							<a href="https://maps.app.goo.gl/g5t8zBqjSifGmSWR9">
								Pod Hroby 271 Kolín IV
							</a>
						</div>
					</div>
					<div className="contact-us__socials">
						<p>Слідкуйте за нами</p>
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
				</div>
			</div>
			<div className="contact-us__curtain"></div>
		</>
	);
};

export default ContactUs;
