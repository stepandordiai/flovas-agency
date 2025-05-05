import "./ContactUs.scss";

const ContactUs = () => {
	function removeContactUs(e) {
		e.preventDefault();
		document
			.querySelector(".contact-us")
			.classList.remove("contact-us--active");
		document
			.querySelector(".bg-curtain")
			.classList.remove("bg-curtain--active");
	}

	return (
		<>
			<div className="contact-us">
				<div className="contact-us__header">
					<p className="contact-us__title">Kontaktujte nás</p>
					<button onClick={removeContactUs}>close</button>
				</div>
				<form action="">
					<div className="input-container">
						<label htmlFor="first-name">Jméno</label>
						<input id="first-name" type="text" placeholder="Jméno" />
					</div>
					<div className="input-container">
						<label htmlFor="last-name">Příjmení</label>
						<input id="last-name" type="text" placeholder="Příjmení" />
					</div>
					<div className="input-container">
						<label htmlFor="tel">Telefonní číslo</label>
						<input id="tel" type="text" placeholder="Telefonní číslo" />
					</div>
					<div className="input-container">
						<label htmlFor="message">Zpráva</label>
						<input id="message" type="text" placeholder="Zpráva" />
					</div>
					<div className="form__btn-container">
						<button onClick={removeContactUs}>Cancel</button>
						<button>Submit</button>
					</div>
				</form>
			</div>
			<div className="bg-curtain"></div>
		</>
	);
};

export default ContactUs;
