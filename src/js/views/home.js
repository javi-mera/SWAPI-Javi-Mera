import "../../styles/home.scss";
import { Cardpla } from "../component/cardPla";
import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import React, { useState, useContext } from "react";

export const Home = () => {
	const { store } = useContext(Context);
	//const [indexTop, setIndexTop] = useState(4);
	//const indexBottom = indexTop - 4;
	//const botn = document.querySelector(".botn");
	//const gridAllCards = document.querySelector(".gridAllCards");
	//let shown = true;
	/**const [shownPla, setShownPla] = useState(true);
	const [shownPeo, setShownPeo] = useState(true);

	function handleClickPla() {
		setShownPla(shownPla => !shownPla);
		if (shownPla) {
			setShownPeo(true);
		}
	}

	function handleClickPeo() {
		setShownPeo(shownPeo => !shownPeo);
		if (shownPeo) {
			setShownPla(true);
		}
	} */
	/**<div className="row  gridAllCards">
					{store.planets.map((element, i) => {
						if (!shownPla) {
							return <Cardpla key={i} element={element} />;
						} else {
							return null;
						}
					})}
                </div> */
	/**<div className="row  gridAllCards">
					{store.people.map((element, i) => {
						if (!shownPeo) {
							return <Cardpeo key={i} element={element} />;
						} else {
							return null;
						}
					})}
				</div> */
	return (
		<div className="fondo">
			<div>
				<Link to="/planets">
					<div className="botn ">
						<div className="botn__face botn__face--front">
							<img
								className="pic"
								src="https://www.geoenciclopedia.com/wp-content/uploads/2019/12/que_son_los_planetas.jpg"
							/>
						</div>
						<div className="botn__face botn__face--back">
							<img
								className="pic"
								src="https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/YBAQ7FCAINDAFJUIIOIOCHGBS4.jpg"
							/>
							<div className="texto">Planetas</div>
						</div>
					</div>
				</Link>
			</div>
			<div>
				<Link to="/people">
					<h3 className="botn">People</h3>
				</Link>
			</div>
		</div>
	);
};
