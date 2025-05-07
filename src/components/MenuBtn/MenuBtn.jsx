import "./MenuBtn.scss";

const MenuBtn = () => {
	function toggleMenuBtn() {
		document
			.querySelector(".menu-btn__dot")
			.classList.toggle("menu-btn__dot--active");
		document.querySelector(".menu").classList.toggle("menu--active");
		document
			.querySelector(".home-inner")
			.classList.toggle("home-inner--active");
	}
	return (
		<button onClick={toggleMenuBtn} className="menu-btn">
			<div className="menu-btn__title">menu</div>
			<div className="menu-btn__dot"></div>
		</button>
	);
};

export default MenuBtn;
