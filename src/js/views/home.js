import "../../styles/home.scss";
import { Cardpla } from "../component/cardPla";
import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";

import React, { useState, useEffect, useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [indexTop, setIndexTop] = useState(4);
	const indexBottom = indexTop - 4;
	const botn = document.querySelector(".botn");
	const gridAllCards = document.querySelector(".gridAllCards");
	//let shown = true;
	const [shown, setShown] = useState(true);

	if (shown) {
		//botn.innerText = "Show Planets 👀";
		gridAllCards.style.opacity = 0;
	} else {
		//botn.innerText = "Hide Planets 🙈";
		gridAllCards.style.opacity = 1;
	}

	shown = !shown;

	return (
		<div className="">
			<div className="">
				<button className="botn " onClick={() => setShown(false)}>
					{" "}
					Hide planets
				</button>
				<div className="row  gridAllCards">
					{store.planets.map((element, i) => {
						return <Cardpla key={i} element={element} />;
					})}
				</div>
				<p> Hola </p>
			</div>
			<div className="card-group">
				<h2 className="row justify-content-md-center">People</h2>
				<div className="list-group list-group-horizontal">
					{store.people.map((element, i) => {
						if (i + 1 <= indexTop && i + 1 > indexBottom) return <Cardpeo key={i} element={element} />;
					})}
				</div>
				<button onClick={() => setIndexTop(indexTop - 3)}>Previous</button>
				<button style={{ float: "right" }} onClick={() => setIndexTop(indexTop + 3)}>
					Next
				</button>
			</div>
		</div>
	);
};
