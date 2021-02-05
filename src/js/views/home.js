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
		<div className="">
			<div className="">
				<Link to="/planets">
					<button className="botn ">Planets</button>
				</Link>
			</div>
			<div className="">
				<Link to="/people">
					<button className="botn ">People</button>
				</Link>
			</div>
		</div>
	);
};
