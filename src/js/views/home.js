import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cardpla } from "../component/cardPla";
import { Cardpeo } from "../component/cardPeo";
import { Context } from "../store/appContext";

import React, { useState, useEffect, useContext } from "react";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [indexTop, setIndexTop] = useState(4);
	const indexBottom = indexTop - 4;

	return (
		<div className="container">
			<div className="card-group">
				<h2 className="row justify-content-md-center">Planets</h2>
				<div className="list-group list-group-horizontal">
					{store.planets.map((element, i) => {
						if (i + 1 <= indexTop && i + 1 > indexBottom) {
							return <Cardpla key={i} element={element} />;
						}
					})}
				</div>
				<button onClick={() => setIndexTop(indexTop - 3)}>Previous</button>
				<button onClick={() => setIndexTop(indexTop + 3)}>Next</button>
			</div>
			<div className="card-group">
				<h2 className="row justify-content-md-center">People</h2>
				<div className="list-group-vertical ">
					{store.people.map((element, i) => {
						return <Cardpeo key={i} element={element} />;
					})}
				</div>
			</div>
		</div>
	);
};
