import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurger3() {
		document.querySelector(".burger-3").classList.toggle("burger-3--active");
		document
			.querySelector(".burger-3__center-line")
			.classList.toggle("burger-3__center-line--active");
	}
	return (
		<>
			<div onClick={toggleBurger3} className="burger-3">
				<span className="burger-3__center-line"></span>
			</div>
		</>
	);
};

export default BurgerBtn;
