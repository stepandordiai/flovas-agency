import img from "/iphone.png";
import "./AddToHomeScreen.scss";

const AddToHomeScreen = () => {
	return (
		<>
			<div className="add-to-home-screen">
				<h2 className="add-to-home-screen__title">
					Flovas агенція у вашому смартфоні
				</h2>
				<div className="add-to-home-screen__container">
					<img width={200} src={img} alt="" />
					<ul className="add-to-home-screen__list">
						<li>
							Відкрийте{" "}
							<a href="https://flovas.netlify.app/" target="_blank">
								www.flovas.cz
							</a>{" "}
							у браузері Safari або Chrome (Android)
						</li>
						<li>
							Натисніть на значок «Поділитися» внизу вікна або три крапки у
							верхньому правому куті (Android)
						</li>
						<li>
							Прокрутіть вниз, виберіть «На екран Додому» і натисніть «Додати»
						</li>
						<li>
							Готово! Веб-додаток{" "}
							<a href="https://flovas.netlify.app/" target="_blank">
								www.flovas.cz
							</a>{" "}
							з'явиться поряд з іншими програмами.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AddToHomeScreen;
